In React Router Dom v6, a common issue arises when using nested routes with dynamic segments.  If the parent route doesn't match, child routes won't render, even if the child route segment matches. This is because React Router v6 uses a stricter matching system compared to v5.  For instance:

```javascript
<Route path="/users/:userId/profile">
  <Route path=":profileId" element={<UserProfile />} />
</Route>
```

If you navigate to `/users/123/profile/details`, the `UserProfile` component won't render because the parent route `/users/:userId/profile` expects only one dynamic segment, not two. 