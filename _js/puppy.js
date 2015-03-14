	/*  

			 function tab_link_click() 
		       {console.log ('hey there !');}
  
		         $('#tabbed nav a').click(tab_link_click);

		*/

		//WE HAVE TO KILL THE LINK ABOVE, IT IS NOT NECESSARY TO KEEP IT. THIS IS JUST FOR SHOW OR NOTES.


		$('#tabbed section').hide(); //hides all
		$('#tabbed section:eq(0)').show(); //only shows the first one // arrays start with 0

		//to kill the link you will need to do this below..

		function tab_link_click(event) 
			
		{event.preventDefault();
			//kill the link, we will take it from here


			//change chosen one class
			$('#tabbed nav a').removeClass('theChosenOne'); //<---blanket removal
			$(this).addClass('theChosenOne');


			/*show and hide appropriate section*/


			$('#tabbed section').hide(); //hide all of them

			var theHref = $ (this).attr('href');
			$(theHref).show(); //show section based on ID in Href of our link			

			console.log ('hey there !');}


			$('#tabbed nav a').click(tab_link_click);

			/*the orange word (event) is called an argument
				then you state your argument as event.preventDefault();
				*/



			// this is just specifying what will be done but not actually making it happen
			// this as is will only show the first image and you will have to refresh each time

			function light_on()
			{// {$('#dark').show();
			//end first image showing only 


				// down below we have created a variable which will then tell it to find the image that we have clicked on
				// this changes the lightbox image
				var whichImg = $(this).find('img').attr('src');

				$('#dark #light img').attr('src' ,whichImg);




			// manage new dimesions (dims)
			// we are making a ghost img which will allow each existing image to fit the proper height and still be within the white box
			var tempImg = new Image();
			tempImg.src = whichImg;




			$(tempImg).load(function() 

			   { var og_width = tempImg.width;
			     var og_height = tempImg.height;
			     
			     var new_height =(og_height/og_width)*600;

			     //console.log(new_height);

			     $('#dark #light').height(new_height); 
			   	
			   });


				$('#dark').show();}


			function light_off()
				{$('#dark').hide();}	


			// this allows you to click the images (only displaying the first image no matter what)
			// this is also only speaking to the gallery div and nothing else
			$('.gallery div').click(light_on);


			// event listeners & triggers
			// this talks to the dark transparent area and also the lightboxes 

			// gives the option for the user to close the image
		    $('#dark #light .close').click(light_off);

		    // this will allow the user to get off of the lightbox view
		    $('#dark').click(light_off);
	

	