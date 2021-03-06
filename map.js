var rsr = Raphael('map', '940', '508');

var regions = [];

var $map = $('#map');
var $infobox = $('.infobox');

var central_asia = rsr.path("M931.8,87.2l-5.9-0.2l-14.6-12.5l-17.5-3.6l-6.2,4.7l-3.4-2.9l-9.4-0.2l-7.7,1.2l-6.1-5.8l-17.5,0.6    l-12.7-7.2l-20.3-3.6v6.5l-15.9-0.4l-1.3,5l-9-6.1L769.4,59l-16.1-5.8L727,60.2l21.9-12.1l-4.8-10L733,38.5l-7.3-4.8l-17.1,9.2    l-1.9-2.9l-23.2,5.4l-2.5,7.3L667,52.6l-0.1,5.3l4,4l-7.3-1l-3.6,3.3l-10-6.9l-0.6,16.9l7.5,2.3l-5.4,1.2l-2.3,9l-9.8,1.7l7.7-3.8    l-1-27.1l-6.3-0.8l-7.3,8.6l2.5,12.3l-19-5.6l-1.3,6.3l-18-0.8l-10.4,4l-2.7,5l-3.5,1l0.2-7.9l-6.1-2.9l-1.5,12.3l-9,5.6l-8.2,2.3    l-2.1-6.5l-6.1-5l15.5,3.5l4.2-6.5l-24-11.1l-3.5,11.8l2.5,15.6l-1,9l-5,3.8l3.1,3.3l-14,3.5l-7.8,6.8l-2.5,10.2L502,140l5.3,2.4    l5.4,9.6l-5.1,3.5l2.1,7l7.6,2.2V178l-14.8-0.6l11.3,7.5l-0.2,4.6l7.3,13.8l5.3-3.8l-4-7.9l2.3-3.5l6.4,2.9l7.4-3.9l-3.4-5.7    l5.9-10.7h6l2.3,4.8l5-1.2l-2.7-4.6l10-3.5l-4.6,7.5l11.7,11.9l19.6,5.4l-5.2-12.5l0.4-9.2l8.1-4.2l7.3,3.5l13.5-2.1l19.7-16.8    l43.6-7.2l25.3,14.2l5.1-5.8h4.6l2.2,4.2l11.4,2.3l7.5,2.4l11.3-2.4l5.6,2l5.4-0.4l6-6.6l1.5-9.9h8l4.4,3.3l-0.4,4l3.3,7.5h6.9    l2.9,6.6l6.9-2l4.3,19.7l13.2-11.5l4.7-25.9l-9.4-6.7l14.5-19.9l26.1,2.6l9.2-11.1l8.1,3.1l11.3-6.9l-8.6,10.7l-14.4,17.5l2.9,19    l13.2-14.2l2.1-12.1l3.1-10.6l15.5,0.4l24.3-10.8l-6.5-7.8l12.3-7.2l13.8,12l4.2-10.6L931.8,87.2z M609.4,67.7l-0.2,0.1l0,0.1    L609.4,67.7z M609.2,67.8l-4.8-9.1l7.1-9.6l22.3-8.2l-0.2-3.5l-26.4,6l-11.4,13.2l-1.2,9.9l7.8,5L609.2,67.8z");
central_asia.attr({fill: '#D0D7DA','stroke-width': '0','stroke-opacity': '1', 'cursor': 'pointer'}).data({'id': 'central_asia', 'region': 'Central Asia', 'description' : 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.'});
regions.push(central_asia);

var africa = rsr.path("M 675.4,142.5 631.8,149.7 607.9,170.1 597.6,170.1 593.5,176.1 600.2,188.9 598.8,202.2     587.9,203.5 588.1,191 568.5,185.7 563.3,187.2 546.1,184.9 538.4,187.1 531,191 533.2,201.4 557,206.7 547.6,221 529.6,220     515.7,216.8 510.3,223 490.6,212.4 492.1,198.3 469.5,202 459.1,207.6 449.9,206 440.3,218.9 439.6,226.9 425.9,244.6     422.7,252.1 421.3,274 437.4,300.8 451.4,305.8 475.4,299.7 489.4,309.1 487.7,325.2 498.3,343.8 498.5,358.8 494,372.1     501,394.6 509,417.9 512.1,428.8 532.4,425.4 545.1,408.7 546.2,399.4 552.8,396.4 550.7,381.2 564.3,370.3 563.3,347.8     562.6,335.9 584.1,307.1 592.5,283.7 576.4,287.4 570.2,277.2 562.9,268.6 553.5,243.8 547.4,230 553.3,231.2 562.7,254     571,266.7 573.1,279.9 609.2,261.1 613.2,251.1 602.3,240.4 593.6,243.4 584.4,225 587.9,222.8 598.2,236.1 604.2,235.2     610.3,240.2 617,241.6 622.2,236.1 615.3,227.8 639.9,222.8 639.9,213.1 646.4,212.6 646.4,222.8 660,221.1 657.8,214.5     644.1,198.3 657.5,191 660.2,180.6 669.4,176.9 669.4,171.5 672.9,171 675.8,162.2 684.3,154.8 700.7,156.7    z");
africa.attr({fill: '#D0D7DA','stroke-width': '0','stroke-opacity': '1', 'cursor': 'pointer'}).data({'id': 'africa', 'region': 'Africa', 'description': 'Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.'});
regions.push(africa);

var south_america = rsr.path("M229.5,248.6l6.9,4.1l2.3,4.2l8.1-2.1l-18.3-10l-7,3.5l0.9,1.1L229.5,248.6z M247.5,261.9l4.2,1.2h2.7    l8.4-2.3l-4.6-3.8H250l0.8,3.8l-3.5-0.4L247.5,261.9z M236.6,261.7l4.6,1.3l1.6-1.9l-5.6-0.4L236.6,261.7z M330.9,336.7l-18.6-9.6    l-3.5,0.8l-1.5-3.6l-11.1-5.6l-6.3,2.7l4.4-6.9l-9.2-15.7h-9l-8.6-12.9l-20-1.7l-5.5,1.2v-5.5l-10.1,6.4l-3.8,9l-7.1-6.8l-4.4,3.1    l-6.5-7.5l1.5-10.6l-4.6-4.9l-9,1.8l1.5-7.1l4-12.3L195,253l-2.7,6.7l-9,3.1l-8.3-10.2l0.4-20l8-7.2l-28-10.1l-29.6-1l6.4,9.7    l0.8,7.5l9.6,15.2l2,0l-12.3-28.8h3.6l20.3,33.2l-0.8,4.2l4.9,8.3l13.9,5.5l5.6,0.4l5.6-0.4l7.3,6.7l8.6,2.7l5.6,9.4l3.5,3.1    l4.3,6.4l6.3-3.7l3.8,3.8L221,309l-4,16.6l1.9,4.2l-5.1,6l9.3,10l6.3,18l14.2,12.5L243,392l-1.7,30.6l-7.1,37.9l-3.8,18.4    l2.3,16.5l12.6,11.4l14.5-5.1l-10.2-2.9l-3.3-10.6l8.6-11.3l-4.6-7.7l5-2.9l3.6-7.9l-1.2-6.1h4.2l1.7-6.3l9.4-3.3l4-7.3l-5-8.4    l5.6,3.5l5,0.3l14.4-21l-0.4-8.4l17.3-10l8.7-16.3l-1.2-12.5l9.5-11.8V336.7z");
south_america.attr({fill: '#D0D7DA','stroke-width': '0','stroke-opacity': '1', 'cursor': 'pointer'}).data({'id': 'south_america', 'region': 'South America', 'description': 'Completely synergize resource sucking relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service'});
regions.push(south_america);

var north_america = rsr.path("M190.6,47.7l28.2,0.4l1.9-3.8l-7-2.6l-19.1-0.9l-0.2-1.7l-4-1.5l-9.4-1.9l-0.8,2.7l10.4,3.8V47.7z     M199.6,31.1l-3.1,8.8l25.7-0.8l3.1-1.9l10.4-12.7l32-16.7l-6.6-2.2l-15.8-3l-28.7,5.2h-18.3l-4.4,5.8l16.1,3.3l17.1-1l-11.9,3.6    l-21.7-2.4l-4-3l-6.5-1l-0.2,5.6l6.3,11.5L199.6,31.1z M130.8,49l-13.5-1.3l-7.9,2.7l-1,10.7l8.8,1.9L130.8,49z M370.8,33.7    l18-20.7L354.1,1.3l-29-0.8l-13.4,6.1l-24.9,1.7L252,19.3l0.5,1.6l7.7-0.7l-1.6,4.6l-4.9,1.3l-11.7,2l-3,1.3l3.1,3.3l13.2,0.4    l-7.5,1.6l-6.6,0.7l3.2,3.8l4.2,2.4l12.7-2.6l13.1,4.3l8,12l-2.4,6.2c0,0,2.1,1.3,2.4,1.7c0.3-0.3,1.9-1.2,1.9-1.2l7.3,1.4    l1.7,5.5l-1.5-0.2l-4.2-2.1l-4.6,0.2l1.5,1.5l-2.1,1.2l-1.2,3.2l2,2.5l3,0l3.6-2.5l-4-3.8l3.8,1.8l3.5,0.3l-0.2,8.4l-7.1,3.6    l5.2,15.4l8.8,12.3l11.1,4.6L319,97l1.5-5.2l6.9-0.6l10.6-9l18.2-6.9l10.7-7.5l-2.7-10.9L376,44.6L370.8,33.7z M266.8,83.2    L252,77.8l1.6-8.2L221.1,51L199.1,54l-6.1-4.8L181,49l0.2,12.7l-5.4,9l-9-0.6l-6.5-5.6l-8.4-11.5L138.2,58l-4.7-4.9L121,60.9    l16.3,5.6l-12.6,1.8l15.4,6.4l12.7-2.1l2.5,0.4l-6.5,7.5l-15.4-3.5L99.3,65L82,72.8l-11.3-2.2l-45-5.6L4.3,75.9l11.3,9.2L1.4,88.6    L17.7,97L6,108.2l17.3,10.9l-7.5,12.1l5.2-0.8L52.1,112l22.1,5.4l34.7,38.7v35l17,23.3l29.6,1l28,10.1l25.2-2.7l7.5,14.7l4.1,1.7    l-3.9-17.1l13.6-11.6l-1.6-10.5l16.3-16.7l18.6-14.4l-9.6-12.9l23.6-9.2l4.7-4.5l-27.2-31.6L266.8,83.2z M282.5,63.4    c0.1,0,0.1,0,0-0.1C282.5,63.4,282.4,63.4,282.5,63.4z");
north_america.attr({fill: '#D0D7DA','stroke-width': '0','stroke-opacity': '1', 'cursor': 'pointer'}).data({'id': 'north_america', 'region': 'North & Central America', 'description': 'Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.'});
regions.push(north_america);

var asia_pacific = rsr.path("M707.2,269.4l2.6,22.9l5.5,15.9l5.3,5.9l5.7,3.3l-1.8-4l-4.7-10l-7.2-11.4L715,280l11.5,12.1l11.4-10.7    l-10.7-18.1l2.7-7.4l18.5-4.1l21.4-22.4l-7.2-19.1l6.2-9.6l-9.7,1.3l-2.3-5.4l7.8-5.8l8.5,4l6.2,19.3l5.4-9.7l-4.5-9.8l17.6-13.3    l-4.3-19.7l-6.9,2l-2.9-6.6h-6.9l-3.3-7.5l0.4-4l-4.4-3.3h-8l-1.5,9.9l-6,6.6l-10.9-1.7l-8.9,1.9l-21.3-4.1l-2.2-4.2h-4.6l0.3,6.4    l-7-0.7l-14.8-1.8l-8.6,7.4l-3.3,8.8l-3.1,0.5v5.4l-11.9,3.4V191l-13.4,7.3l13.7,16.2l2.3,6.6l-13.6,1.6v-10.2l-6.5,0.5v9.7    l-24.5,5l6.9,8.4l-5.2,5.5l13.3-0.8l15.1,10.8L649,274l8.7,20.3l6.6-5.7v-17.7l26.5-21.8l8.7,17.6l4.7-1.5L707.2,269.4z     M734.4,315.8l5.9,12.9l11.9,0.6l4.2-17.6l2.6-8.7l-5.1-5.1l-10.2,12.1L734.4,315.8z M798.5,327.6l-6.5,0l13.4,8.7l3.4,12.1    l16.1-3l4.2,8.7l6.2-1.5l-8.2-20.9l-20.6-5.7L798.5,327.6z M721.6,318.3l-14.2-15.3h-6.6l10.9,12.2l9.5,19l8.4-4.9L721.6,318.3z     M787.3,221.5l25.6-14l1.7-16.9l-3.6-0.9l-4.5,11.7l-18.7,11.2L787.3,221.5z M753.4,345l-4.9-5.9l-19.1-2.6l-4.2,2.6l25.6,5.5    L753.4,345z M900.1,414.5l-6.6-11.8l-2.8-0.1l5.5,12.3l-2.6,3.6l4.5,8.5l7.4-11.7L900.1,414.5z M884.5,431.7l-9.2,9.8l6.8,3.2    l11.6-15.5l-2.8-5.3L884.5,431.7z M825.9,456.7l3-1.3l2.4-8.2l-9.8,2.5L825.9,456.7z M825.7,377.2l-2.5-11.6l-4.2-3l-3-8.5    l-3.6,20.3l-13.1-8l3-8.1l-18.3,0.5l-0.5,7.3l-6.7-7.3l-10.7,11l-0.6,7.9l-19.9,11.6l-0.9,12.7l6.1,17.8l0.4,8l3.6,0.9l22.7-8.1    l13.1-0.9l15.3,12.3l10.5,14.5l16.6-6.9l4-15.2l4.7-7l-2.3-20.3L825.7,377.2z");
asia_pacific.attr({fill: '#D0D7DA','stroke-width': '0','stroke-opacity': '1', 'cursor': 'pointer'}).data({'id': 'asia_pacific', 'region': 'Asia Pacific', 'description': 'Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.'});
regions.push(asia_pacific);


var europe = rsr.path("M420.2,90.3l-1.9-1.5l-5.8,3.6l-1.3-4.4l-1.9,0l-3.7,4.2l3.7,1l-2.9,1.1l5,3.8l8.8,2.1l11.9-6.6l-6-6.7    L420.2,90.3z M441.3,150.5l7.8-5.3l-0.8-3.1l2.3-5.4l-3.5-2.5l-5.4,2.5l-2.1,4.6l1.9,1.1l-2.1,4.4L441.3,150.5z M486.2,188.6    l0.8,6.1l2.1,0.4l0.7-5.8l-0.7-2.2L486.2,188.6z M452,136.7h5.7l-0.5,5.2l-3.6-0.6l0.4,4.4l-2.1,2.5l1.2,0.4l5.5-0.8l-0.4,1.7    l-4.2,0.2l-3.8,4.6l1.8,0.4l4.1-1.7l12.5-2.6l-1.1-2.6l2.3-3.3l-1.7-1.2l-1.7-0.2l-7.5-12.3l1.5-6.1l-2.5-0.6l-3.1,1l3.2-4.4    l-4-0.4l-3.5,4.8l0.6,5.4L452,136.7z M543,71.3l-2.5,0l2.4-2.7l-6.9-4.2l-3.1,1.5l-3.5,4.8l0.8-3.6l-3.4-1.2l-3.3,3.7l-2.9-2.5    l-10.2,7.5l-4,7.7l-5.4,5.5l-2.3,4.4l-6.7,4.8l-0.4,1.7l3.3-0.6l-3.3,2.6l-3.3-1.5l-9.2,7.9l1.4,1.3l-2.7,0.8l1.3,4.8l2.7,0.2    l-3.3,3.5h2.9l-1,3.3l3.6,3.1l9.6-4.8l0.6,5.2l3.6,5l-0.8,4.4l3.6,0.4l1.6-3.7l4-1.5l0.4-8.4l3.3-0.2l2.5-2.5l-1.1-0.2l1.9-1.7    l-3.1-3.5l-1.2,0.2l0.1-7.8l2.8-4.1l4.4-1.9l2.3-2.3l-0.6-3.3l3.1-3.8l6.5,0.4l0.6,2.5l-1.7,1.7l-1.9,4l-5.4,4.6l1.2,3.6l-0.4,3.3    l4,2.5l-0.2,1.5l2.1,1.3l4-2.9l6.1-0.6l5-3.8l1-9l-2.5-15.6L543,71.3z M493.9,138.6l1.2-0.8l1.8-0.7l0.3-0.9l-3.4,0.7h-0.9    L493.9,138.6z M494.7,131.4l-0.2,1.4l-0.5-0.3l-1.2,1.1l0.5,2l3.3-0.8l-0.4-3.6L494.7,131.4z M488.5,180.3l-2.3,1.9v2.9l2.1,1.9    l0.8-4.4L488.5,180.3z M507.6,155.6l5.1-3.5l-5.4-9.6L502,140l-1.6,0l-4.4-1.2l-1.7,2.1l-3.1-1.3l-1.5-4.2l2.1-4l-0.6-4.6l0.8-2.9    h-1.3l-1.4,2.5h-1.9l-1.7,2.1l0.8,0.2l1.3-0.8l1.3-0.1l0.4,2.1l-2-0.1l-1.7-0.4l-0.2,4.8l1.5,0.8l0.6,4.2l-0.6,1.9l-3.1,1.3    l-3.2-0.2l-3.3,2.7l-1.5,3.5l-3.6,1.3l-3.8,1.9l-0.3,2.6l-3.4,2.6h-2.3l-0.1-2.1h-1.8l1.1,4.8l-4.2,1.2l-1.2-1.2l-3.6,0.6l2.9,4.8    l2.3-0.9l4.8,6.1l-0.2,8.1l-3.6,1.3l-12.3-1.8l-5.1,1.8l2.3,8.3l-2.1,6.1l1.3,4.2l-0.5,1.8l2.8,1.9l2.9-1.4l1.9,3.1l5.2-1.3h3.6    l4.2-3.6l2.7-4.6l-1-1.9l8.7-7.9l-0.2-3.8l3.3-1.5l4.4,1.4l5.5-4.5l4.2,3.3l4,6.1l7.1,5.8l2.3,2l0.2,3.1l-0.8,3.1l1.5-0.6l2.1-4    l-0.7-2.9l0.7-1.9l3.5,2.2v-1.8l-5.8-3.7l0.2-1.8l-5-1.2l-1.9-4.3l-3.3-2.3l0.6-4.3l2.8-0.6l0.1,2.7l1.6,0.4l0.6-2.1l1.9,4.5    l14.8,0.6v-13.3l-7.6-2.2L507.6,155.6z");
europe.attr({fill: '#D0D7DA','stroke-width': '0','stroke-opacity': '1', 'cursor': 'pointer'}).data({'id': 'europe', 'region': 'Europe', 'description': 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower fully researched growth strategies and interoperable internal or "organic" sources.'});
regions.push(europe);


for (var i = 0; i < regions.length; i++) {

  regions[i].mouseover(function(e){
		this.node.style.fill = '#177095';
	});

	regions[i].mouseout(function(e){
		this.node.style.fill = '#D0D7DA';
	});

	regions[i].mousedown(function(e){

		var posx;
		var posy;

		if (typeof e !== 'undefined') {
			posx = e.pageX - $map.offset().left - 130;
			posy = e.pageY - $map.offset().top - 35;
		} else {
			// console.log(building);
			posx = parseInt(regions[i].getBBox().x, 10) - 260;
			posy = parseInt(regions[i].getBBox().y, 10) - 57;
		}

		console.log(posx, posy);

		$infobox.css({
			'top': posy + 'px',
			'left': posx + 'px'
		});

		$infobox.find('.infobox__title').text(this.data('region'));
    
    $infobox.find('.description').text(this.data('description'));
    
	});
  
  

	$infobox.on('click', '.infobox__close', function(e){

		$infobox.css({
			'top' : '-99999px',
			'left' : '-99999px'
		});

		e.preventDefault();
		e.stopPropagation();
	});
}







