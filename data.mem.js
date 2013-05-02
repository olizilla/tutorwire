var names = require('./data/names')();
var uk = require('./lib/uk-city-geocode.js');

// Get the good stuff outta a wikitable:
// $('.wikitable').find('td:first-child > a:first-child').map(function(index, element){ return $(this).text()})
// "St David's" ---> killed
// Brighton & Hove --> Brighton
// "City of Westminster" killed
// "City of London"--> London
var areas = ["Bath", "Birmingham", "Bradford", "Brighton", "Bristol", "Cambridge", "Canterbury", "Carlisle", "Chelmsford", "Chester", "Chichester", "Coventry", "Derby", "Durham", "Ely", "Exeter", "Gloucester", "Hereford", "Kingston upon Hull", "Lancaster", "Leeds", "Leicester", "Lichfield", "Lincoln", "Liverpool", "London", "Manchester", "Newcastle upon Tyne", "Norwich", "Nottingham", "Oxford", "Peterborough", "Plymouth", "Portsmouth", "Preston", "Ripon", "Salford", "Salisbury", "Sheffield", "Southampton", "St Albans", "Stoke-on-Trent", "Sunderland", "Truro", "Wakefield", "Wells", "Winchester", "Wolverhampton", "Worcester", "York", "Aberdeen", "Dundee", "Edinburgh", "Glasgow", "Inverness", "Perth", "Stirling", "Bangor", "Cardiff", "Newport", "St Asaph", "Swansea", "Armagh", "Belfast", "Derry", "Lisburn", "Newry"];

// http://www.londonmet.ac.uk/courses/undergraduate.cfm?coursedata=ug-09-2011&subject=ALL
// JSON.stringify(jQuery('.fb_courselink').map(function(i,e){return jQuery(e).text()}).get())
var subjects = ["Accounting and Business Management","Accounting and Finance","Advertising, Marketing Communications and Public Relations","Animation","Applied Biomedical Science","Architecture","Architecture and Interior Design","Art, Media and Design","Aviation Management","Banking and Finance","Banking and Finance (with Integrated Professional Training)","Biochemistry","Biological Sciences","Biomedical Science","Biomedical Science leading to MD","Biotechnology","Business Administration","Business Computing","Business Economics","Business Information Technology","Business Management","Business Management","Business Management","Business Management and Marketing","Chemistry","Community Development and Leadership","Community Work","Computer Animation","Computer Forensics and IT Security","Computer Games Modelling and Design","Computer Games Programming","Computer Networking","Computer Networking and IT Security","Computer Science","Computer Systems Engineering","Computing","Computing and Business IT","Creative Writing","Creative Writing and English Literature","Crime Scene and Forensic Investigation","Criminology","Criminology and Community Policing","Criminology and Law","Criminology and Psychology","Criminology and Sociology","Criminology and Youth Studies","Dance","Dietetics and Nutrition","Digital Media","Digital Media Design","Diplomacy and International Relations","Diplomacy and Law","Early Childhood Studies","Early Childhood Studies","Early Years Teaching","Economics","Economics and Finance","Education Studies","Education Studies and English Literature","Education: Primary Pathway","Electronic and Communications Engineering","English Literature","Events Management","Fashion Buying and Retailing","Fashion Marketing","Fashion Marketing and Journalism","Fashion with Textiles","Film & broadcast production","Film and Television Studies","Finance","Financial Mathematics","Fine Art","Fine Art - painting","Fine Art - photography","Fine Art - Sculpture and installation","Football and Community Sports Coaching with Arsenal","Forensic Science","Furniture","Furniture and Product Design","Graphic Design","Health and Social Care","Health and Social Policy","Herbal Medicinal Science","Human Nutrition","Human Resource Management","Illustration","Interior Architecture","Interior Design","International Business","International Business Management","International Business Management","International Business Management","International Foundation Programme","International Relations","International Relations and Law","International Relations and Politics","International Relations, Peace and Conflict Studies","Jewellery and Silversmithing","Journalism","Journalism, Film and Television Studies","Law","Law","Law and Business Management","LLB Business Law","LLB Law (with International Relations)","Marketing","Mathematical Sciences","Mathematics","Mathematics and Computer Science","Mathematics and Statistics","Media and Communications","Media practice","Media, Communications and Journalism","Medical Bioscience","Montessori early childhood practice","Multimedia Games Design","Music Industry and Events Management","Music Industry Management","Music Technology (Audio Systems)","Music Technology (Music Production)","Music Technology (Sound for Media)","Musical Instruments","Network Management and Security","Personal Training and Fitness Consultancy","Pharmaceutical Science","Pharmacology","Photography","Photography (Media practice - Lenscraft)","Politics","Psychology","Psychology and Sociology","Public Health and Social Care","Sciences (Biology, Chemistry, Health, Psychology)","Social Sciences","Social Sciences and Humanities","Social Work","Sociology","Sociology and Social Policy","Software Engineering","Sport Psychology and Coaching","Sports and Dance Therapy","Sports Business Management","Sports Science","Sports Science and Physical Education","Sports Therapy","Telecommunications and Networks Engineering","Textile Design","Tourism and Travel Management","Translation","Video (Media practice - Lenscraft)","Youth Studies","Youth Work"];

var photos = [
'http://marshallmatlock.com/wp-content/gallery/the-mans-man-xxxviii-jeff-bridges/thumbs/thumbs_jeff-bridges-smile-portrait.jpg',
'http://1.bp.blogspot.com/-O5hZUN42AOg/UEW7Vtq05eI/AAAAAAAAQWM/uRWYbbUhvLg/s400/scan0033.jpg',
'http://assets.nydailynews.com/polopoly_fs/1.1231023.1357074014!/img/httpImage/image.jpg_gen/derivatives/landscape_635/article-jones-0101.jpg',
'http://srichinmoyphotos.files.wordpress.com/2008/03/srichinmoy.jpg'
];

function createRandomTutor(){
	return {
		name: randomItem(names) + ' ' + randomItem(names),
		area: randomItem(areas),
		subjects: [randomItem(subjects)],
		photo: randomItem(photos)
	};
}

function randomItem(array){
	return array[Math.floor(Math.random() * array.length)];
}

function createRandomTutors(num){
	var results = [];
	for (; num >= 0; num--){
		results.push(createRandomTutor());
	}
	return results;
}

var data = createRandomTutors(1000);

module.exports = {

	findTutorsBySubject: function(subject){
		var results = [];
		for(var i = 0; i<data.length; i++){
			var item = data[i];
			for (var j=0; j<item.subjects.length; j++ ){
				if(item.subjects[j].toLowerCase() === subject.toLowerCase()){
					results.push(item);
				}
			}
		}
		return results;
	},

	findPopularSubjects: function(){
		return subjects;
	},

	findPopularAreas:function(){
		return areas;
	},

	findUkGeocode: function(place){
		var res = uk[place];
		console.log(place, res);
		return res;
	}
};
