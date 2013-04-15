var allProducts = [
	{ 
      title: 'Book'
      , img: '1/14/Alte_Buecher.JPG'
      , desc: 'Surprise yourself with our mystery bag of books. What will it be, a thriller? An old law book? Who knows?'
      , price: 3 
   }
	, { 
      title: 'Chess Set'
      , img: 'f/f3/Staunton_chess_set.jpg'
      , desc: 'This one-of-a-kind chess set is perfect for your dog.'
      , price: 6 
   }
	, { 
      title: 'Coffee'
      , img: 'c/c5/Roasted_coffee_beans.jpg'
      , desc: 'Fresh from the mountains of Nebraska, this Coffee is sure to put a smile on your Mother-in-Law\'s face.'
      , price: 9 
   }
   , { 
      title: 'Beer'
      , img: 'f/fd/Bia33.jpg'
      , desc: 'This complete six pack of beer is the perfect addition to your friend\'s party down the street.'
      , price: 15 
   }
   , { 
      title: 'Headphones'
      , img: '1/1b/BoseAE2.JPG'
      , desc: 'With a rich sound quality and strong base, these headphones are perfect for extended music play.'
      , price: 50 
   }
   , { 
      title: 'Digital Camera'
      , img: 'e/ed/Canon_Digital_IXUS_I.JPG'
      , desc: 'Don\'t miss those precious moments. With this digital camera, you can take pictures of anything, anywhere.'
      , price: 275 
   }
   , { 
      title: 'Vase'
      , img: '9/93/%27A_big_-_bellied_jar%27%2C_17th-18th_century%2C_Museum_of_Cham_Sculpture.jpg'
      , desc: 'This antique-style vase is the perfect conversation piece for your next cocktail party.'
      , price: 100 
   }
   , { 
      title: 'Bronze Statue'
      , img: 'd/d7/%27Amitayus%27_from_Tibet%2C_19th_century%2C_gilt_bronze%2C_turquoise_and_coral%2C_Honolulu_Museum_of_Art.JPG'
      , desc: 'Set in real bronze, this timeless piece is as strong and long-lasting as it is beautiful.'
      , price: 175 
   }
   , { 
      title: 'Bicycle'
      , img: '5/5a/%27Fomas_Road_King_cycle%27_and_competitor_number_for_%2728Kms_amateur_ride%27_competition_of_%27Mumbai_Cyclothon-2011%27.jpg'
      , desc: 'Get back into shape and save money on transit with this sleek bicycle. Featuring a strong frame and a comfortable seat.'
      , price: 400 
   }
   , { 
      title: 'Violin'
      , img: '7/70/"Barcelli".jpg'
      , desc: 'Perfect for the student or trained professional, this violin boasts an impressive sound as well as a beautiful finish.'
      , price: 850 
   }
   , { 
      title: 'Old Coin'
      , img: 'b/be/"Toma"_de_Cartagena_por_Vernon.jpg'
      , desc: 'This priceless old coin is set in real metal. It\'s value has not been estimated, however it can be yours for this limited time low price.'
      , price: 25 
   }
   , { 
      title: 'SUV'
      , img: '9/9b/%2700-%2701_Nissan_Pathfinder_Chilkoot_%28Centropolis_Laval_%2710%29.jpg'
      , desc: 'Perfect for off-roading or just taking the kids to school. This SUV is a must-have companion.'
      , price: 45000
   }
   , { 
      title: 'Computer Chip'
      , img: 'f/fc/Chip.jpg'
      , desc: 'Need to run a hardware program with limited enclosure space? This all-in-one chip will perform numerous calculations per second as well as allow for generous customization.'
      , price: 3 
   }
   , { 
      title: 'Ornament'
      , img: 'a/a6/1-1260209002o7DW.jpg'
      , desc: 'This festive ornament is sure to bring holiday cheer into your home.'
      , price: 12 
   }
   , { 
      title: 'Plane'
      , img: '0/00/1959ModelPiperPA-24Comanche.jpg'
      , desc: 'This lightweight craft is a gem in the sky. Perfect for taking the occasional weekend trip to the coast.'
      , price: 95000 
   }
   , { 
      title: 'Motorcycle'
      , img: '4/4c/1969_BSA_A50.jpg'
      , desc: 'This powerful motorcycle gets great mileage and makes you look good too.'
      , price: 48000 
   }
   , { 
      title: 'USB Dongle'
      , img: '6/65/180px_usb_dongle.jpg'
      , desc: 'Store all your files, music, and photos in one place, on this stylish USB drive.'
      , price: 8 
   }
   , { 
      title: 'Pocket Watch'
      , img: '0/0b/1926_goldene_Taschenuhr_IWC2.jpg'
      , desc: 'This elegant piece of fine craftsmanship features a classic dial and a brand new golden finish.'
      , price: 120 
   }
   , { 
      title: 'Guitar'
      , img: 'f/fb/00-28EC1_1K.jpg'
      , desc: 'Impress your friends with this hand finished guitar with nickel-plated strings.'
      , price: 360 
   }
   , { 
      title: 'Clock'
      , img: '5/53/000_0387_edited.jpg'
      , desc: 'This old german clock makes a great timepiece for your mantle.'
      , price: 35 
   }
   , { 
      title: 'Radio'
      , img: '2/2a/03-20-07_2316.jpg'
      , desc: 'Listen to live radio or plug in your portable music device for listening to music in the comfort of your own home.'
      , price: 60 
   }
   , { 
      title: 'Caligraphy Pen'
      , img: 'a/ac/05Notenfeder_mit_Strich_und_Schriftbeispiel.jpg'
      , desc: 'Create beautiful, elegant letters with this one-of-a-kind pen and tip set.'
      , price: 18 
   }
   , { 
      title: 'Media Box'
      , img: 'c/cc/100_1176.JPG'
      , desc: 'Play games against your friends or sit back and watch a movie with this top-rated entertainment system.'
      , price: 270 
   }
   , { 
      title: 'Typewriter'
      , img: '1/11/1200xl.jpg'
      , desc: 'Skip the hassle of printers and computer drivers with this simple electronic typewriter, complete with correction tape.'
      , price: 90 
   }
   , { 
      title: 'Toy Robot'
      , img: 'a/ae/2-xltiger.JPG'
      , desc: 'This toy robot is as fun as he is educational. Comes with three robot tapes to encourage your child to learn.'
      , price: 55 
   }
]
