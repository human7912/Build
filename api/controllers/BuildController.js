/**
 * BuildController
 *
 * @description :: Server-side logic for managing Builds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	version: function (req, res) {
	    return res.json({
	      version: '0.1'
	    });
	  },

	byApp: function (req, res) {

		BuildService.getBuilds(function(builds) {
            res.json(builds);
        }).catch(function (err) {
					console.log(err);
					res.status(500)
						.json({ error: err });
		});

		return res;
  },

	byId: function (req, res) {

		Build.find({ 'id' : req.param("id") })
      .catch(function (err) {
        console.log(err);
        res.status(500)
          .json({ error: err });
      });

    return res;

	}
};
