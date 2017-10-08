

module.exports = {

  getBuilds: function (type) {

		Build.find()
			.where({app_type:type})
		  .limit(10)
		  .sort('create_time DESC')
		  .exec(function(err, builds) {
        if(err) throw err;
        next(builds);
      });
  }

};
