

export const firebaseErrorMessages: Record<string, string> = {
    'auth/claims-too-large': 'The claims payload exceeds the maximum allowed size of 1000 bytes.',
    'auth/email-already-exists': 'The email is already in use by another user.',
    'auth/email-already-in-use': 'The email is already in use by another user.',
    'auth/network-request-failed': 'Network error. Please check your internet connection and try again.',
    'auth/id-token-expired': 'Your session has expired. Please sign in again.',
    'auth/id-token-revoked': 'Your session has been revoked. Please sign in again.',
    'auth/insufficient-permission': 'Insufficient permissions to perform this action.',
    'auth/internal-error': 'An unexpected error occurred. Please try again later.',
    'auth/invalid-argument': 'An invalid argument was provided.',
    'auth/invalid-claims': 'The provided custom claims are invalid.',
    'auth/invalid-continue-uri': 'The continue URL must be a valid URL string.',
    'auth/invalid-creation-time': 'The creation time must be a valid UTC date string.',
    'auth/invalid-credential': 'The provided credential is invalid.',
    'auth/invalid-disabled-field': 'The disabled field must be a boolean value.',
    'auth/invalid-display-name': 'The display name must be a non-empty string.',
    'auth/invalid-dynamic-link-domain': 'The dynamic link domain is not configured properly.',
    'auth/invalid-email': 'The email address is not valid.',
    'auth/invalid-email-verified': 'The email verification status must be a boolean.',
    'auth/invalid-hash-algorithm': 'The hash algorithm is invalid or unsupported.',
    'auth/invalid-hash-block-size': 'The hash block size is invalid.',
    'auth/invalid-hash-derived-key-length': 'The derived key length is invalid.',
    'auth/invalid-hash-key': 'The hash key must be a valid byte buffer.',
    'auth/invalid-hash-memory-cost': 'The hash memory cost is invalid.',
    'auth/invalid-hash-parallelization': 'The hash parallelization is invalid.',
    'auth/invalid-hash-rounds': 'The hash rounds are invalid.',
    'auth/invalid-hash-salt-separator': 'The hash salt separator must be a valid byte buffer.',
    'auth/invalid-id-token': 'The provided ID token is invalid.',
    'auth/invalid-last-sign-in-time': 'The last sign-in time must be a valid UTC date string.',
    'auth/invalid-page-token': 'The next page token provided is invalid.',
    'auth/invalid-password': 'The password must be at least six characters long.',
    'auth/invalid-password-hash': 'The password hash is invalid.',
    'auth/invalid-password-salt': 'The password salt is invalid.',
    'auth/invalid-phone-number': 'The phone number must be in E.164 format.',
    'auth/invalid-photo-url': 'The photo URL is not valid.',
    'auth/invalid-provider-data': 'The provider data is invalid.',
    'auth/invalid-provider-id': 'The provider ID is invalid or unsupported.',
    'auth/invalid-oauth-responsetype': 'Only one OAuth responseType should be set to true.',
    'auth/invalid-session-cookie-duration': 'The session cookie duration must be between 5 minutes and 2 weeks.',
    'auth/invalid-uid': 'The user ID must be a non-empty string with at most 128 characters.',
    'auth/invalid-user-import': 'The user record to import is invalid.',
    'auth/maximum-user-count-exceeded': 'You have exceeded the maximum number of users allowed.',
    'auth/missing-android-pkg-name': 'An Android package name is required if an Android app is required to be installed.',
    'auth/missing-continue-uri': 'A valid continue URL must be provided.',
    'auth/missing-hash-algorithm': 'Importing users with password hashes requires a hashing algorithm.',
    'auth/missing-ios-bundle-id': 'A Bundle ID is required for iOS requests.',
    'auth/missing-uid': 'A user ID is required for this operation.',
    'auth/missing-oauth-client-secret': 'The OAuth client secret is required to enable the OIDC code flow.',
    'auth/operation-not-allowed': 'This operation is not allowed. Please enable it in the Firebase Console.',
    'auth/phone-number-already-exists': 'The phone number is already in use by another user.',
    'auth/project-not-found': 'No Firebase project was found for the provided credential.',
    'auth/reserved-claims': 'Some custom claims are reserved and cannot be used.',
    'auth/session-cookie-expired': 'The session cookie has expired.',
    'auth/session-cookie-revoked': 'The session cookie has been revoked.',
    'auth/too-many-requests': 'You have made too many requests. Please try again later.',
    'auth/uid-already-exists': 'The provided user ID is already in use.',
    'auth/unauthorized-continue-uri': 'The domain of the continue URL is not whitelisted.',
    'auth/user-not-found': 'No user found with the provided credentials.',
    default: 'An unexpected error occurred. Please try again later.',
}