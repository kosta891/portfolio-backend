module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b90cbb84043d29f456ffd5c021710e71'),
  },
});
