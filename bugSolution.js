The solution involves restructuring the route paths to match the URL correctly.  Instead of separate path segments for the parent and child routes, combine them into a single path.   For example:

```javascript
<Route path="/users/:userId/profile/:profileId" element={<UserProfile />} />
```

This change makes the route match the entire URL, including both dynamic segments.  The `UserProfile` component will now render when navigating to `/users/123/profile/details`.