module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '48c924f7cdd5a7c823fc28f70440d98c'),
  },
});
