var data = [
	{ name: 'Bob Jones', area:'London', subjects: ['Maths'] },
	{ name: 'Queen Latifa', area:'Brigton', subjects: ['Singing', 'Dancing'] },
	{ name: 'God Zilla', area:'Lancaster', subjects: ['Japanese'] }
]

module.exports = {

	findTutorsBySubject: function(subject){
		var results = [];
		for(var i = 0; i<data.length; i++){
			var item = data[i];
			for (var j=0; j<item.subjects.length; j++ ){
				if(item.subjects[j].toLowerCase() === subject.toLowerCase()){
					results.add(item);
				}
			}
		}
		return results;
	},

	findPopularSubjects: function(){
		return ['Maths', 'Singing', 'Dancing', 'Japanese']
	}
};
