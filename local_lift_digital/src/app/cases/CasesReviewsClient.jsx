"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import {
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db, googleProvider } from "../../lib/firebase";

const MAX_COMMENT_LENGTH = 1000;

export default function CasesReviewsClient() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const [reviews, setReviews] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [anonymize, setAnonymize] = useState(true);

  const [submitting, setSubmitting] = useState(false);
  const [signingIn, setSigningIn] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /*
   * Firebase authentication listener.
   */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });

    return unsubscribe;
  }, []);

  /*
   * Real-time Firestore review feed.
   *
   * Reviews are limited to the most recent 20 documents.
   */
  useEffect(() => {
    const reviewsQuery = query(
      collection(db, "reviews"),
      orderBy("createdAt", "desc"),
      limit(20),
    );

    const unsubscribe = onSnapshot(
      reviewsQuery,
      (snapshot) => {
        const nextReviews = snapshot.docs.map((document) => {
          const data = document.data();

          return {
            id: document.id,
            userId: typeof data.userId === "string" ? data.userId : "",
            displayName:
              typeof data.displayName === "string"
                ? data.displayName
                : "Verified Local Owner",
            photoURL:
              typeof data.photoURL === "string" ? data.photoURL : null,
            rating:
              typeof data.rating === "number"
                ? Math.min(5, Math.max(1, data.rating))
                : 5,
            comment:
              typeof data.comment === "string" ? data.comment : "",
            anonymized: Boolean(data.anonymized),
            role:
              typeof data.role === "string"
                ? data.role
                : "Verified Business Owner",
            createdAt: data.createdAt ?? null,
          };
        });

        setReviews(nextReviews);
        setReviewsLoading(false);
      },
      () => {
        setReviewsLoading(false);
        setError(
          "We could not load the latest reviews. Please try again shortly.",
        );
      },
    );

    return unsubscribe;
  }, []);

  const handleGoogleSignIn = async () => {
    setError("");
    setSuccess("");
    setSigningIn(true);

    try {
      await signInWithPopup(auth, googleProvider);

      setSuccess("You are now signed in with Google.");
    } catch (signInError) {
      console.error("Google sign-in error:", signInError);

      setError(
        "Google sign-in could not be completed. Please try again.",
      );
    } finally {
      setSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    setError("");
    setSuccess("");

    try {
      await signOut(auth);
      setSuccess("You have been signed out.");
    } catch (signOutError) {
      console.error("Sign-out error:", signOutError);

      setError("We could not sign you out. Please try again.");
    }
  };

  const handleSubmitReview = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!user) {
      setError("Please sign in with Google before submitting a review.");
      return;
    }

    const trimmedComment = comment.trim();

    if (!trimmedComment) {
      setError("Please enter a comment before submitting your review.");
      return;
    }

    if (trimmedComment.length < 10) {
      setError("Your review must contain at least 10 characters.");
      return;
    }

    if (trimmedComment.length > MAX_COMMENT_LENGTH) {
      setError(
        `Your review must be ${MAX_COMMENT_LENGTH} characters or fewer.`,
      );
      return;
    }

    if (rating < 1 || rating > 5) {
      setError("Please select a rating from 1 to 5 stars.");
      return;
    }

    setSubmitting(true);

    try {
      await addDoc(collection(db, "reviews"), {
        userId: user.uid,
        displayName: anonymize
          ? "Verified Local Owner"
          : user.displayName || "Verified Local Owner",
        photoURL: user.photoURL || null,
        rating,
        comment: trimmedComment,
        anonymized: anonymize,
        role: "Verified Business Owner",
        createdAt: serverTimestamp(),
      });

      setComment("");
      setRating(5);
      setAnonymize(true);

      setSuccess("Thank you. Your verified review has been submitted.");
    } catch (submitError) {
      console.error("Review submission error:", submitError);

      setError(
        "Your review could not be submitted. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-12">
      {/* =========================================================
          AUTHENTICATION / REVIEW FORM
      ========================================================== */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
        {authLoading ? (
          <div className="flex min-h-48 items-center justify-center">
            <p className="text-sm text-slate-400">
              Checking your sign-in status...
            </p>
          </div>
        ) : !user ? (
          <div className="mx-auto max-w-2xl py-8 text-center">
            <div
              aria-hidden="true"
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-950"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-7 w-7"
              >
                <path
                  fill="#4285F4"
                  d="M21.35 12.2c0-.73-.06-1.43-.18-2.1H12v3.98h5.22a4.47 4.47 0 0 1-1.94 2.93v2.43h3.14c1.84-1.69 2.93-4.18 2.93-7.24Z"
                />
                <path
                  fill="#34A853"
                  d="M12 21.5c2.64 0 4.86-.87 6.48-2.36l-3.14-2.43c-.87.58-1.98.93-3.34.93-2.56 0-4.73-1.73-5.51-4.06H3.25v2.5A9.79 9.79 0 0 0 12 21.5Z"
                />
                <path
                  fill="#FBBC05"
                  d="M6.49 13.58A5.9 5.9 0 0 1 6.18 12c0-.55.11-1.08.31-1.58v-2.5H3.25A9.5 9.5 0 0 0 2.25 12c0 1.53.37 2.98 1 4.08l3.24-2.5Z"
                />
                <path
                  fill="#EA4335"
                  d="M12 6.36c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.85 3.45 14.64 2.5 12 2.5a9.79 9.79 0 0 0-8.75 5.42l3.24 2.5C7.27 8.09 9.44 6.36 12 6.36Z"
                />
              </svg>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Share your experience
            </h3>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-400">
              Sign in with Google to leave a verified review about your
              experience with Local Lift Digital.
            </p>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={signingIn}
              className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#d73d00] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#b63200] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  fill="currentColor"
                  d="M21.35 12.2c0-.73-.06-1.43-.18-2.1H12v3.98h5.22a4.47 4.47 0 0 1-1.94 2.93v2.43h3.14c1.84-1.69 2.93-4.18 2.93-7.24Z"
                />
                <path
                  fill="currentColor"
                  d="M12 21.5c2.64 0 4.86-.87 6.48-2.36l-3.14-2.43c-.87.58-1.98.93-3.34.93-2.56 0-4.73-1.73-5.51-4.06H3.25v2.5A9.79 9.79 0 0 0 12 21.5Z"
                />
                <path
                  fill="currentColor"
                  d="M6.49 13.58A5.9 5.9 0 0 1 6.18 12c0-.55.11-1.08.31-1.58v-2.5H3.25A9.5 9.5 0 0 0 2.25 12c0 1.53.37 2.98 1 4.08l3.24-2.5Z"
                />
                <path
                  fill="currentColor"
                  d="M12 6.36c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.85 3.45 14.64 2.5 12 2.5a9.79 9.79 0 0 0-8.75 5.42l3.24 2.5C7.27 8.09 9.44 6.36 12 6.36Z"
                />
              </svg>

              {signingIn
                ? "Signing In..."
                : "Sign In with Google to Leave a Verified Review"}
            </button>
          </div>
        ) : (
          <div>
            <div className="flex flex-col justify-between gap-5 border-b border-slate-800 pb-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                {user.photoURL ? (
                  <Image
                    src={user.photoURL}
                    alt=""
                    width={48}
                    height={48}
                    unoptimized
                    className="h-12 w-12 rounded-full border border-slate-700 object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-lg font-bold text-white"
                  >
                    {(user.displayName || "U")
                      .charAt(0)
                      .toUpperCase()}
                  </div>
                )}

                <div>
                  <p className="font-semibold text-white">
                    {user.displayName || "Verified Local Owner"}
                  </p>

                  <p className="text-sm text-slate-400">
                    Signed in with Google
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSignOut}
                className="text-sm font-medium text-slate-400 transition-colors hover:text-amber-600"
              >
                Sign Out
              </button>
            </div>

            <form
              onSubmit={handleSubmitReview}
              className="mt-8"
            >
              <div>
                <label className="block text-sm font-semibold text-white">
                  Your Rating
                </label>

                <div
                  className="mt-3 flex items-center gap-1"
                  role="radiogroup"
                  aria-label="Star rating"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      role="radio"
                      aria-checked={rating === star}
                      aria-label={`${star} ${
                        star === 1 ? "star" : "stars"
                      }`}
                      onClick={() => setRating(star)}
                      className="rounded-md p-1 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className={`h-8 w-8 ${
                          star <= rating
                            ? "text-amber-600"
                            : "text-slate-700"
                        }`}
                      >
                        <path d="M12 2.75l2.86 5.79 6.39.93-4.62 4.51 1.09 6.37L12 17.34l-5.72 3.01 1.09-6.37-4.62-4.51 6.39-.93L12 2.75Z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <label
                  htmlFor="review-comment"
                  className="block text-sm font-semibold text-white"
                >
                  Your Review
                </label>

                <textarea
                  id="review-comment"
                  name="comment"
                  value={comment}
                  onChange={(event) =>
                    setComment(event.target.value)
                  }
                  maxLength={MAX_COMMENT_LENGTH}
                  rows={6}
                  placeholder="Tell other local business owners about your experience..."
                  className="mt-3 w-full resize-y rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-slate-600 focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                />

                <p className="mt-2 text-right text-xs text-[#7085a3]">
                  {comment.length}/{MAX_COMMENT_LENGTH}
                </p>
              </div>

              <label className="mt-6 flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={anonymize}
                  onChange={(event) =>
                    setAnonymize(event.target.checked)
                  }
                  className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-950 text-amber-600 accent-amber-600 focus:ring-amber-600"
                />

                <span className="text-sm leading-6 text-slate-400">
                  Anonymize my post on the public site (displays as
                  &quot;Verified Local Owner&quot; instead of my full
                  profile name)
                </span>
              </label>

              {error && (
                <div
                  role="alert"
                  className="mt-6 rounded-lg border border-red-900 bg-slate-950 px-4 py-3 text-sm text-red-300"
                >
                  {error}
                </div>
              )}

              {success && (
                <div
                  role="status"
                  className="mt-6 rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-amber-600"
                >
                  {success}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="mt-7 rounded-lg bg-[#d73d00] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#b63200] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Submitting Review..." : "Submit Verified Review"}
              </button>
            </form>
          </div>
        )}
      </div>

      {/* =========================================================
          REVIEW FEED
      ========================================================== */}
      <div>
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
              Recent Reviews
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              What our clients are saying.
            </h3>
          </div>

          <p className="text-sm text-[#7085a3]">
            Verified reviews from authenticated users
          </p>
        </div>

        {reviewsLoading ? (
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
            <p className="text-sm text-slate-400">
              Loading recent reviews...
            </p>
          </div>
        ) : reviews.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
            <p className="text-slate-400">
              No reviews have been published yet. Be the first verified
              client to share your experience.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {reviews.map((review) => {
              const publicName = review.anonymized
                ? "Verified Local Owner"
                : review.displayName;

              return (
                <article
                  key={review.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {review.photoURL ? (
                        <Image
                          src={review.photoURL}
                          alt=""
                          width={44}
                          height={44}
                          unoptimized
                          className="h-11 w-11 rounded-full border border-slate-700 object-cover"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div
                          aria-hidden="true"
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-sm font-bold text-amber-600"
                        >
                          {publicName.charAt(0).toUpperCase()}
                        </div>
                      )}

                      <div>
                        <p className="font-semibold text-white">
                          {publicName}
                        </p>

                        <p className="text-xs text-slate-500">
                          {review.role}
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex shrink-0 gap-0.5"
                      aria-label={`${review.rating} out of 5 stars`}
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className={`h-4 w-4 ${
                            star <= review.rating
                              ? "text-amber-600"
                              : "text-slate-700"
                          }`}
                        >
                          <path d="M12 2.75l2.86 5.79 6.39.93-4.62 4.51 1.09 6.37L12 17.34l-5.72 3.01 1.09-6.37-4.62-4.51 6.39-.93L12 2.75Z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <blockquote className="mt-6 text-sm leading-7 text-slate-300">
                    &quot;{review.comment}&quot;
                  </blockquote>

                  {review.createdAt && (
                    <time
                      dateTime={review.createdAt.toDate().toISOString()}
                      className="mt-5 block text-xs text-slate-600"
                    >
                      {review.createdAt
                        .toDate()
                        .toLocaleDateString("en-ZA", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                    </time>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}