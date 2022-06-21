const express = require("express");
const router = express.Router();
const auth =require( "../utils/auth");

const {
    createevent
//   createcourse, allcourses, allcoursesadmin, updatecourse, singlecourse, deletecourse,
} = require("../controllers/eventcontroller"); 
router.route("/admin/createevent").post( auth,createevent);
// router.route("/admin/events").get(auth, authorizerole("admin"), allcoursesadmin);
// router.route("/admin/event/:id").put(auth, authorizerole("admin"), updatecourse);
// router.route("/admin/deleteevent/:id").delete(auth, authorizerole("admin"), deletecourse);

// router.route("/allevent").get(allcourses);
// router.route("/singleevent/:id").get(singlecourse);

  module.exports = router;
