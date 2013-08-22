k$.messageCtrl = ($scope) -> 
	$scope.contacts = k$.allContacts 
	$scope.contactForId = (id) ->
		contactIndex = 0
		$.grep($scope.contacts, (e, i) -> contactIndex = i if e.id == id )
		$scope.contacts[contactIndex]
	$scope.allThreads = [ 
		threadId: 1 
		read: false
		subject: 'Nina'
		messages: [ 
			contact: $scope.contactForId(2)
			text: 'Just like a real theatre! See, there we have the curtain, the foreground, the background, and all. No artificial scenery is needed. The eye travels direct to the lake, and rests on the horizon. The curtain will be raised as the moon rises at half-past eight.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(6)
			text: 'Splendid!'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(2)
			text: 'Of course the whole effect will be ruined if Nina is late. She should be here by now, but her father and stepmother watch her so closely that it is like stealing her from a prison to get her away from home. Your hair and beard are all on end. Oughtn\'t you to have them trimmed?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(6)
			text: 'They are the tragedy of my existence. Even when I was young I always looked as if I were drunk, and all. Women have never liked me. Why is my sister out of temper?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(2)
			text: 'Why? Because she is jealous and bored. She is not acting this evening, but Nina is, and so she has set herself against me, and against the performance of the play, and against the play itself, which she hates without ever having read it.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(6)
			text: 'Does she, really?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(2)
			text: 'Yes, she is furious because Nina is going to have a success on this little stage. My mother is a psychological curiosity. Without doubt brilliant and talented, capable of sobbing over a novel, of reciting all Nekrasoff\'s poetry by heart, and of nursing the sick like an angel of heaven, you should see what happens if any one begins praising Duse to her! She alone must be praised and written about, raved over, her marvellous acting in "La Dame aux Camelias" extolled to the skies. As she cannot get all that rubbish in the country, she grows peevish and cross, and thinks we are all against her, and to blame for it all. She is superstitious, too. She dreads burning three candles, and fears the thirteenth day of the month. Then she is stingy. I know for a fact that she has seventy thousand roubles in a bank at Odessa, but she is ready to burst into tears if you ask her to lend you a penny.'
			date: '01/01/2014'
        ,
			contact: $scope.contactForId(6)
			text: 'You have taken it into your head that your mother dislikes your play, and the thought of it has excited you, and all. Keep calm; your mother adores you.'
			date: '01/01/2014'
		]
	,
		threadId: 2 
		read: true
		subject: 'Regarding Medviedenko'
		messages: [ 
			contact: $scope.contactForId(24)
			text: 'I am telling you all these things because you write books and they may be useful to you. I tell you honestly, I should not have lived another day if he had wounded himself fatally. Yet I am courageous; I have decided to tear this love of mine out of my heart by the roots.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(17)
			text: 'How will you do it?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(24)
			text: 'By marrying Medviedenko.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(17)
			text: 'The school-teacher?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(24)
			text: 'Yes.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(17)
			text: 'I don\'t see the necessity for that.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(24)
			text: 'Oh, if you knew what it is to love without hope for years and years, to wait for ever for something that will never come! I shall not marry for love, but marriage will at least be a change, and will bring new cares to deaden the memories of the past. Shall we have another drink?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(17)
			text: 'Haven\'t you had enough?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(24)
			text: 'Fiddlesticks! Don\'t look at me with that expression on your face. Women drink oftener than you imagine, but most of them do it in secret, and not openly, as I do. They do indeed, and it is always either vodka or brandy. To your good health! You are so easy to get on with that I am sorry to see you go.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(17)
			text: 'And I am sorry to leave.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(24)
			text: 'You should ask her to stay.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(17)
			text: 'She would not do that now. Her son has been behaving outrageously. First he attempted suicide, and now I hear he is going to challenge me to a duel, though what his provocation may be I can\'t imagine. He is always sulking and sneering and preaching about a new form of art, as if the field of art were not large enough to accommodate both old and new without the necessity of jostling.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(24)
			text: 'It is jealousy. However, that is none of my business. That schoolteacher of mine is none too clever, but he is very good, poor man, and he loves me dearly, and I am sorry for him. However, let me say good-bye and wish you a pleasant journey. Remember me kindly in your thoughts. [She shakes hands with him] Thanks for your goodwill. Send me your books, and be sure to write something in them; nothing formal, but simply this: "To Masha, who, forgetful of her origin, for some unknown reason is living in this world." Good-bye.'
			date: '01/01/2014'
	    ]
	,
		threadId: 3
		read: true
		subject: 'Nothing to be done'
		messages: [
			contact: $scope.contactForId(23)
			text: 'I\'m beginning to come round to that opinion. All my life I\'ve tried to put it from me, saying Vladimir, be reasonable, you haven\'t yet tried everything. And I resumed the struggle. So there you are again.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(19)
			text: 'Am I?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(23)
			text: 'I\'m glad to see you back. I thought you were gone forever.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(19)
			text: 'Me too.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(23)
			text: 'Together again at last! We\'ll have to celebrate this. But how? Get up till I embrace you.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(19)
			text: 'Not now, not now.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(23)
			text: 'May one inquire where His Highness spent the night?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(19)
			text: 'In a ditch.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(23)
			text: 'A ditch! Where?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(19)
			text: 'Over there.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(23)
			text: 'And they didn\'t beat you?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(19)
			text: 'Beat me? Certainly they beat me.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(23)
			text: 'The same lot as usual?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(19)
			text: 'The same? I don\'t know.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(23)
			text: 'When I think of it . . . all these years . . . but for me . . . where would you be . . .  You\'d be nothing more than a little heap of bones at the present minute, no doubt about it.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(19)
			text: 'And what of it?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(23)
			text: 'It\'s too much for one man. On the other hand what\'s the good of losing heart now, that\'s what I say. We should have thought of it a million years ago, in the nineties.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(19)
			text: 'Ah stop blathering and help me off with this bloody thing.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(23)
			text: 'Hand in hand from the top of the Eiffel Tower, among the first. We were respectable in those days. Now it\'s too late. They wouldn\'t even let us up. What are you doing?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(19)
			text: 'Taking off my boot. Did that never happen to you?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(23)
			text: 'Boots must be taken off every day, I\'m tired telling you that. Why don\'t you listen to me?'
			date: '01/01/2014'
	    ]
	,
		threadId: 4
		read: true
		subject: 'Godot'
		messages: [
			contact: $scope.contactForId(15)
			text: 'Why it\'s very natural, very natural. I myself in your situation, if I had an appointment with a Godin . . . Godet . . . Godot . . . anyhow, you see who I mean, I\'d wait till it was black night before I gave up. I\'d very much like to sit down, but I don\'t quite know how to go about it.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(13)
			text: 'Could I be of any help?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(15)
			text: 'If you asked me perhaps.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(13)
			text: 'If you asked me to sit down.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(15)
			text: 'Would that be a help?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(13)
			text: 'I fancy so.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(15)
			text: 'Here we go. Be seated, Sir, I beg of you.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(13)
			text: 'No no, I wouldn\'t think of it! Ask me again.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(15)
			text: 'Come come, take a seat I beseech you, you\'ll get pneumonia.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(13)
			text: 'You really think so?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(15)
			text: 'Why it\'s absolutely certain.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(13)
			text: 'No doubt you are right. Done it again! Thank you, dear fellow. But I must really be getting along, if I am to observe my schedule.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(15)
			text: 'Time has stopped.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(13)
			text: 'Don\'t you believe it, Sir, don\'t you believe it. Whatever you like, but not that.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(15)
			text: 'Everything seems black to him today.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(13)
			text: 'Except the firmament. But I see what it is, you are not from these parts, you don\'t know what our twilights can do. Shall I tell you? I can\'t refuse you. A little attention, if you please. What\'s the matter with this whip? Worn out, this whip. What was I saying?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(15)
			text: 'Let\'s go.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(13)
			text: 'But take the weight off your feet, I implore you, you\'ll catch your death.'
			date: '01/01/2014'
		]
	,
		threadId: 5
		read: true
		subject: 'Lady Bloxham'
		messages: [
			contact: $scope.contactForId(11)
			text: 'I own a house in Belgrave Square, but it is let by the year to Lady Bloxham.  Of course, I can get it back whenever I like, at six months’ notice.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(14)
			text: 'Lady Bloxham?  I don’t know her.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(11)
			text: 'Oh, she goes about very little.  She is a lady considerably advanced in years.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(14)
			text: 'Ah, nowadays that is no guarantee of respectability of character.  What number in Belgrave Square?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(11)
			text: '149'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(14)
			text: 'The unfashionable side.  I thought there was something.  However, that could easily be altered.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(11)
			text: 'Do you mean the fashion, or the side?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(14)
			text: 'Both, if necessary, I presume.  What are your politics?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(11)
			text: 'Well, I am afraid I really have none.  I am a Liberal Unionist.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(14)
			text: 'Oh, they count as Tories.  They dine with us.  Or come in the evening, at any rate.  Now to minor matters.  Are your parents living?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(11)
			text: 'I have lost both my parents.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(14)
			text: 'To lose one parent, Mr. Worthing, may be regarded as a misfortune; to lose both looks like carelessness.  Who was your father?  He was evidently a man of some wealth.  Was he born in what the Radical papers call the purple of commerce, or did he rise from the ranks of the aristocracy?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(11)
			text: 'I am afraid I really don’t know.  The fact is, Lady Bracknell, I said I had lost my parents.  It would be nearer the truth to say that my parents seem to have lost me . . . I don’t actually know who I am by birth.  I was . . . well, I was found.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(14)
			text: 'Found!'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(11)
			text: 'The late Mr. Thomas Cardew, an old gentleman of a very charitable and kindly disposition, found me, and gave me the name of Worthing, because he happened to have a first-class ticket for Worthing in his pocket at the time.  Worthing is a place in Sussex.  It is a seaside resort.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(14)
			text: 'Where did the charitable gentleman who had a first-class ticket for this seaside resort find you?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(11)
			text: 'In a hand-bag.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(14)
			text: 'A hand-bag?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(11)
			text: 'Yes, Lady Bracknell.  I was in a hand-bag—a somewhat large, black leather hand-bag, with handles to it—an ordinary hand-bag in fact.'
			date: '01/01/2014'
		,
		    contact: $scope.contactForId(14)
		    text: 'In what locality did this Mr. James, or Thomas, Cardew come across this ordinary hand-bag?'
		    date: '01/01/2014'
		   ,
			contact: $scope.contactForId(11)
			text: 'In the cloak-room at Victoria Station.  It was given to him in mistake for his own.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(14)
			text: 'The cloak-room at Victoria Station?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(11)
			text: 'Yes.  The Brighton line.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(14)
			text: 'The line is immaterial.  Mr. Worthing, I confess I feel somewhat bewildered by what you have just told me.  To be born, or at any rate bred, in a hand-bag, whether it had handles or not, seems to me to display a contempt for the ordinary decencies of family life that reminds one of the worst excesses of the French Revolution.  And I presume you know what that unfortunate movement led to?  As for the particular locality in which the hand-bag was found, a cloak-room at a railway station might serve to conceal a social indiscretion—has probably, indeed, been used for that purpose before now—but it could hardly be regarded as an assured basis for a recognised position in good society.'
			date: '01/01/2014'
	    ]
	,
		threadId: 6
		read: true
		subject: 'What do you think?'
		messages: [
			contact: $scope.contactForId(9)
			text: 'I am obliged to go up by the first train on Monday morning.  I have a business appointment that I am anxious . . . to miss?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(8)
			text: 'Couldn’t you miss it anywhere but in London?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(9)
			text: 'No: the appointment is in London.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(8)
			text: 'Well, I know, of course, how important it is not to keep a business engagement, if one wants to retain any sense of the beauty of life, but still I think you had better wait till Uncle Jack arrives.  I know he wants to speak to you about your emigrating.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(9)
			text: 'About my what?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(8)
			text: 'Your emigrating.  He has gone up to buy your outfit.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(9)
			text: 'I certainly wouldn’t let Jack buy my outfit.  He has no taste in neckties at all.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(8)
			text: 'I don’t think you will require neckties.  Uncle Jack is sending you to Australia.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(9)
			text: 'Australia!  I’d sooner die.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(8)
			text: 'Well, he said at dinner on Wednesday night, that you would have to choose between this world, the next world, and Australia.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(9)
			text: 'Oh, well!  The accounts I have received of Australia and the next world, are not particularly encouraging.  This world is good enough for me, cousin Cecily.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(8)
			text: 'Yes, but are you good enough for it?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(9)
			text: 'I’m afraid I’m not that.  That is why I want you to reform me.  You might make that your mission, if you don’t mind, cousin Cecily.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(8)
			text: 'I’m afraid I’ve no time, this afternoon.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(9)
			text: 'Well, would you mind my reforming myself this afternoon?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(8)
			text: 'It is rather Quixotic of you.  But I think you should try.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(9)
			text: 'I will.  I feel better already.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(8)
			text: 'You are looking a little worse.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(9)
			text: 'That is because I am hungry.'
			date: '01/01/2014'
		]
	,
		threadId: 7
		read: true
		subject: 'Bunburying'
		messages: [
			contact: $scope.contactForId(4)
			text: 'This ghastly state of things is what you call Bunburying, I suppose?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(7)
			text: 'Yes, and a perfectly wonderful Bunbury it is.  The most wonderful Bunbury I have ever had in my life.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(4)
			text: 'Well, you’ve no right whatsoever to Bunbury here.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(7)
			text: 'That is absurd.  One has a right to Bunbury anywhere one chooses.  Every serious Bunburyist knows that.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(4)
			text: 'Serious Bunburyist!  Good heavens!'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(7)
			text: 'Well, one must be serious about something, if one wants to have any amusement in life.  I happen to be serious about Bunburying.  What on earth you are serious about I haven’t got the remotest idea.  About everything, I should fancy.  You have such an absolutely trivial nature.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(4)
			text: 'Well, the only small satisfaction I have in the whole of this wretched business is that your friend Bunbury is quite exploded.  You won’t be able to run down to the country quite so often as you used to do.  And a very good thing too.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(7)
			text: 'Your brother is a little off colour, isn’t he?  You won’t be able to disappear to London quite so frequently as your wicked custom was.  And not a bad thing either.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(4)
			text: 'As for your conduct towards Miss Cardew, I must say that your taking in a sweet, simple, innocent girl like that is quite inexcusable.  To say nothing of the fact that she is my ward.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(7)
			text: 'I can see no possible defence at all for your deceiving a brilliant, clever, thoroughly experienced young lady like Miss Fairfax.  To say nothing of the fact that she is my cousin.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(4)
			text: 'I wanted to be engaged to Gwendolen, that is all.  I love her.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(7)
			text: 'Well, I simply wanted to be engaged to Cecily.  I adore her.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(4)
			text: 'There is certainly no chance of your marrying Miss Cardew.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(7)
			text: 'I don’t think there is much likelihood of you and Miss Fairfax being united.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(4)
			text: 'Well, that is no business of yours.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(7)
			text: 'If it was my business, I wouldn’t talk about it.  It is very vulgar to talk about one’s business.  Only people like stock-brokers do that, and then merely at dinner parties.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(4)
			text: 'How can you sit there, calmly eating muffins when we are in this horrible trouble, I can’t make out.  You seem to me to be perfectly heartless.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(7)
			text: 'Well, I can’t eat muffins in an agitated manner.  The butter would probably get on my cuffs.  One should always eat muffins quite calmly.  It is the only way to eat them.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(4)
			text: 'I say it’s perfectly heartless your eating muffins at all, under the circumstances.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(7)
			text: 'When I am in trouble, eating is the only thing that consoles me.  Indeed, when I am in really great trouble, as any one who knows me intimately will tell you, I refuse everything except food and drink.  At the present moment I am eating muffins because I am unhappy.  Besides, I am particularly fond of muffins.'
			date: '01/01/2014'
		] 
	,
		threadId: 8
		read: true
		subject: 'Eating sweets again?'
		messages: [
			contact: $scope.contactForId(4 )
			text: 'Hasn\'t Miss Sweet Tooth been breaking rules in town today?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(10)
			text: 'No; what makes you think that?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(4 )
			text: 'Hasn\'t she paid a visit to the confectioner\'s?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(10)
			text: 'No, I assure you--'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(4 )
			text: 'Not been nibbling sweets?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(10)
			text: 'No, certainly not.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(4 )
			text: 'Not even taken a bite at a macaroon or two?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(10)
			text: 'No, I assure you really--'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(4 )
			text: 'There, there, of course I was only joking.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(10)
			text: 'I should not think of going against your wishes.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(4 )
			text: 'No, I am sure of that; besides, you gave me your word--Keep your little Christmas secrets to yourself, my darling. They will all be revealed tonight when the Christmas Tree is lit, no doubt.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(10)
			text: 'Did you remember to invite Doctor Rank?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(4 )
			text: 'No. But there is no need; as a matter of course he will come to dinner with us. However, I will ask him when he comes in this morning. I have ordered some good wine. Nora, you can\'t think how I am looking forward to this evening.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(10)
			text: 'So am I! And how the children will enjoy themselves, Torvald!'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(4 )
			text: 'It is splendid to feel that one has a perfectly safe appointment, and a big enough income. It\'s delightful to think of, isn\'t it?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(10)
			text: 'It\'s wonderful!'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(4 )
			text: 'Do you remember last Christmas? For a full three weeks beforehand you shut yourself up every evening until long after midnight, making ornaments for the Christmas Tree, and all the other fine things that were to be a surprise to us. It was the dullest three weeks I ever spent!'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(10)
			text: 'I didn\'t find it dull.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(4 )
			text: 'But there was precious little result.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(10)
			text: 'Oh, you shouldn\'t tease me about that again. How could I help the cat\'s going in and tearing everything to pieces?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(4 )
			text: 'Of course you couldn\'t, poor little girl. You had the best of intentions to please us all, and that\'s the main thing. But it is a good thing that our hard times are over.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(10)
			text: 'Yes, it is really wonderful.'
			date: '01/01/2014'
		]
	,
		threadId: 9
		read: true
		subject: 'Whatever is the matter?'
		messages: [
			contact: $scope.contactForId(16)
			text: 'What is it?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(15)
			text: 'Nothing. During Lent one of my patients died under chloroform.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(16)
			text: 'It is time to forget that. Tell me, doctor, if I had a friend or a younger sister, and if you knew that she, well—loved you, what would you do?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(15)
			text: 'I don\'t know. I don\'t think I should do anything. I should make her understand that I could not return her love—however, my mind is not bothered about those things now. I must start at once if I am ever to get off. Good-bye, my dear girl. At this rate we shall stand here talking till morning. I shall go out through the sitting-room, because I am afraid your uncle might detain me.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(16)
			text: 'Not a word! His heart and soul are still locked from me, and yet for some reason I am strangely happy. I wonder why? I told him that he was well-bred and handsome and that his voice was sweet. Was that a mistake? I can still feel his voice vibrating in the air; it caresses me. Oh! how terrible it is to be plain! I am plain, I know it. As I came out of church last Sunday I overheard a woman say, "She is a dear, noble girl, but what a pity she is so ugly!" So ugly!'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(18)
			text: 'The storm is over. What delicious air! [A pause] Where is the doctor?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(16)
			text: 'He has gone.'
			date: '01/01/2014'
		]
	,
		threadId: 10 
		read: true
		subject: 'Do I really drink that much?'
		messages: [	
			contact: $scope.contactForId(23)
			text: 'Have I changed much since then?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(12)
			text: 'Oh, yes. You were handsome and young then, and now you are an old man and not handsome any more. You drink, too.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(23)
			text: 'Yes, ten years have made me another man. And why? Because I am overworked. Nurse, I am on my feet from dawn till dusk. I know no rest; at night I tremble under my blankets for fear of being dragged out to visit some one who is sick; I have toiled without repose or a day\'s freedom since I have known you; could I help growing old? And then, existence is tedious, anyway; it is a senseless, dirty business, this life, and goes heavily. Every one about here is silly, and after living with them for two or three years one grows silly oneself. It is inevitable. See what a long moustache I have grown. A foolish, long moustache. Yes, I am as silly as the rest, nurse, but not as stupid; no, I have not grown stupid. Thank God, my brain is not addled yet, though my feelings have grown numb. I ask nothing, I need nothing, I love no one, unless it is yourself alone. I had a nurse just like you when I was a child.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(12)
			text: 'Don\'t you want a bite of something to eat?'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(23)
			text: 'No. During the third week of Lent I went to the epidemic at Malitskoi. It was eruptive typhoid. The peasants were all lying side by side in their huts, and the calves and pigs were running about the floor among the sick. Such dirt there was, and smoke! Unspeakable! I slaved among those people all day, not a crumb passed my lips, but when I got home there was still no rest for me; a switchman was carried in from the railroad; I laid him on the operating table and he went and died in my arms under chloroform, and then my feelings that should have been deadened awoke again, my conscience tortured me as if I had killed the man. I sat down and closed my eyes—like this—and thought: will our descendants two hundred years from now, for whom we are breaking the road, remember to give us a kind word? No, nurse, they will forget.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(12)
			text: 'Man is forgetful, but God remembers.'
			date: '01/01/2014'
		,
			contact: $scope.contactForId(23)
			text: 'Thank you for that. You have spoken the truth.'
			date: '01/01/2014'
	    ]
	]
	$scope.selectedThread = $scope.allThreads[0]
	$scope.setSelectedThread = (thread) ->
		$scope.selectedThread = thread