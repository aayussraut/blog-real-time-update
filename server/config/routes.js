/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  "GET /": "home/index",

  "POST /user/register": "user/register",
  "GET /user/confirm": "user/confirm",
  "POST /user/login": "user/login",
  "POST /user/forgot-password": "user/forgot-password",
  "POST /user/reset-password": "user/reset-password",

  "POST /post/create": "post/create",
  "GET /post/get-all": "post/get-all",
  "GET /post/get-one/:id": "post/get-one",
  "PUT /post/update/:id": "post/update",
  "DELETE /post/delete/:id": "post/delete",

  "GET /chat/join/:id": "chat/join",
  "POST /chat/post": "chat/post",

  "GET /__getcookie": (req, res) => {
    return res.send("_sailsIoJSConnect();");
  },

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/
};
