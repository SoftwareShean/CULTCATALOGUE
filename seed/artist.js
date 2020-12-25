const db = require('../db/connection')
const Artist = require('../models/artist')
const Message = require('../models/message')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
await Artist.deleteMany()
  const artists =
    [
      {
      "name": [ "Grayson Perry" ],
      "portraitImg": [
          "https://gerryco23.files.wordpress.com/2014/11/grayson-perry.jpg?w=725&h=408"
        ],
      "artistBio": [
          {
            "description": "Grayson Perry, born March 24 1960 is an English contemporary artist, writer and broadcaster. He is known for his ceramic vases, tapestries and cross-dressing, as well as his observations of the contemporary arts scene, and for dissecting British prejudices, fashions and foibles.Perry's vases have classical forms and are decorated in bright colours, depicting subjects at odds with their attractive appearance. There is a strong autobiographical element in his work, in which images of Perry as Claire, his female alter-ego, and Alan Measles, his childhood teddy bear, often appear. He has made a number of documentary television programmes and has curated exhibitions. He has published two autobiographies, Grayson Perry: Portrait of the Artist as a Young Girl (2007) and The Descent of Man (2016), written and illustrated a graphic novel, Cycle of Violence (2012), written a book about art, Playing to the Gallery (2014), and published his illustrated Sketchbooks (2016). Various books describing his work have been published. In 2013 he delivered the BBC Reith Lectures. Perry has had solo exhibitions at the Bonnefantenmuseum, Stedelijk Museum Amsterdam, the Barbican Centre,[5] the British Museum and the Serpentine Gallery in London, the Arnolfini in Bristol, The Andy Warhol Museum in Pittsburgh, and the 21st Century Museum of Contemporary Art, Kanazawa, Japan. His work is held in the permanent collections of the British Council and Arts Council, Crafts Council, Stedelijk Museum Amsterdam, Tate and Victoria and Albert Museum, London. He was awarded the Turner Prize in 2003. He was interviewed about the win and resulting press in Sarah Thornton's Seven Days in the Art World. In 2008 he was ranked number 32 in The Daily Telegraph's list of the 100 most powerful people in British culture. In 2012, Perry was among the British cultural icons selected by artist Peter Blake to appear in a new version of his most famous artwork—the Beatles' Sgt. Pepper's Lonely Hearts Club Band album cover—to celebrate the British cultural figures of his life",
            "source": "https://en.wikipedia.org/wiki/Grayson_Perry"
          },
          {
            "description": "Winner of the 2003 Turner Prize, Grayson Perry creates ceramics and other objects that explore diverse historical and contemporary themes. Drawn in by the beauty of his objects, which are covered with sgraffito drawing, handwritten and stenciled text, transferred photographs, and sumptuous glaze, at close range viewers apprehend darker subjects and narrative hints to environmental disaster and child abuse. Autobiographical references to the artist's childhood, family, and transvestite alter ego Claire are intertwined with his political and allegorical references, creating a challenging conflict between his dark themes and the rich beauty of his works.",
            "source": "https://www.artsy.net/artist/grayson-perry"
          }
        ],
      "galleryName": [
          {
            "name": "Saatchi", 
            "website": "https://www.saatchigallery.com/"
          }
        ],
      "portfolio": [
          {
            "title": "Barbaric Splendour",
            "description": "Perry's forms and content are always incongruous: classic Greecian-like urns bearing friezes of car-wrecks, cell-phones, supermodels, as well as more dark and literary scenes, often incorporate auto-biographical references.",
            "dimension": "Glazed ceramic, 67cm x 35cm",
            "date": "2003",
            "images": [
              "https://6d49d47bd32a151032ae-907965fc79c9900a93c12efeb23103bd.ssl.cf1.rackcdn.com/artworks/grayson-perry-barbarics.jpg"
            ],
            "source": "https://www.saatchigallery.com/artists/artpages/grayson_perry_barbaric_splandour.htm"
        },
        {
            "title": "Golden Ghosts",
            "description": "Unhappy expressions on the little girls’ faces in Golden Ghosts contrast sharply with the idyllic country cottages stenciled in the background. Perry often uses found images to create a mood or a tension – the exceptionally sad image of the seated girl is that of a child affected by the Chernobyl Nuclear Power Station disaster. This evocative work hints at a familiarity with psychotherapy, made at a time when Perry was coming to terms with his own unhappy past. Perry’s transvestite alter ego, Claire, appears outlined in gold as the ghost in the title, dressed in the elaborate embroidered Coming Out Dress, made for a performance in 2000.",
            "dimension": "Eathenware, 65cm x 39cm x 39cm",
            "date": "2000",
            "images": [
              "https://6d49d47bd32a151032ae-907965fc79c9900a93c12efeb23103bd.ssl.cf1.rackcdn.com/artworks/1507649218_Perry,%20Grayson%20-%20Golden%20Ghosts%20(2).jpg"
            ],
            "source": "https://www.saatchigallery.com/artists/artpages/grayson_perry_golden_ghosts_13768.htm"
          }
        ]
      },       {
      "name": [ "Kerry James Marshall" ],
      "portraitImg": [
          "https://www.moca.org/storage/app/uploads/public/58a/745/0c3/thumb_2185_1680_0_0_0_auto.jpg"
        ],
      "artistBio": [
          {
            "description": "Kerry James Marshall uses painting, sculptural installations, collage, video, and photography to comment on the history of black identity both in the United States and in Western art. He is well known for paintings that focus on black subjects historically excluded from the artistic canon and has explored issues of race and history through imagery ranging from abstraction to comics. Marshall said in a 2012 interview with Art + Auction that “it is possible to transcend what is perceived to be the limitations of a race-conscious kind of work. It is a limitation only if you accept someone else’s foreclosure from the outside. If you plumb the depths yourself, you can exercise a good deal of creative flexibility. You are limited only by your ability to imagine possibilities. Marshall was born in Alabama in 1955 and grew up in Watts, Los Angeles. He is a 1978 graduate of the Otis College of Art and Design and currently lives and works in Chicago. In his PBS Art21 special Marshall said, “You can’t be born in Birmingham, Alabama, in 1955 and grow up in South Central [Los Angeles] near the Black Panthers headquarters, and not feel like you’ve got some kind of social responsibility. You can’t move to Watts in 1963 and not speak about it. That determined a lot of where my work was going to go…” A major survey, Kerry James Marshall: MASTRY was on view at The Museum of Contemporary Art, Los Angeles from March 12 – July 2, 2017.  The survey was previously on view at The Met Breuer and the Museum of Contemporary Art Chicago. Other solo exhibitions in the past few years include Kerry James Marshall: In the Tower at the National Gallery of Art, Washington, DC (2013); Kerry James Marshall: Painting and Other Stuff, organized by the Museum van Hedendaagse Kunst Antwerpen, Belgium (2013), and traveled to the Kunsthal Charlottenborg, Denmark (2014); Antoni Tapies Foundation, Barcelona (2014) and the Museo Nacional Centro de Arte Reina Sofia, Madrid (2014). Marshall has worked in numerous public collections including the Museum of Modern Art, New York; the Whitney Museum of American Art, New York; The Studio Museum in Harlem, New York; the Metropolitan Museum of Art, New York; the Walker Art Center, Minneapolis; the National Gallery of Art, Washington, DC; Los Angeles County Museum of Art; Birmingham Museum of Art; San Francisco Museum of Modern Art; Art Institute of Chicago; Museum of Contemporary Art Chicago; and the Museum of Fine Arts, Boston. He is the recipient of several awards, grants and fellowships including the MacArthur genius grant in 1997. Kerry James Marshall was selected to exhibit in the 2015 Venice Biennale: All the World's Futures, May 9 - November 22, 2015.",
            "source": "https://jackshainman.com/artists/kerry_james_marshall"
          },
          {
            "description": "Kerry James Marshall (born October 17, 1955) is an American artist born in Birmingham, Alabama. He grew up in South Central Los Angeles and now lives in Chicago, Illinois, where he previously taught at the School of Art and Design at the University of Illinois at Chicago. He is a 1978 graduate of Otis College of Art and Design. An exhibition of his work, Kerry James Marshall: Mastry, was assembled by the Museum of Contemporary Art in 2016.",
            "source": "https://en.wikipedia.org/wiki/Kerry_James_Marshall"
          }
        ],
      "galleryName": [
          {
            "name": "Jack Shainman", 
            "website": "https://jackshainman.com/artists/kerry_james_marshall"
          }
        ],
      "portfolio": [
          {
            "title": "Past Times",
            "description": "A masterpiece of unparalleled formal rigor and graphic grandeur, Past Times is the definitive embodiment of Kerry James Marshall’s revolutionary painterly practice. Executed in 1997, the magnificent panorama of Past Times thunderously declares the arrival of Marshall’s mature artistic project: the utter and indisputable mastery of traditional art historical modes to counter the glaring absence of the black figure within the canon of Western painting. Emphatically testifying to Marshall’s virtuosic painterly abilities, Past Times marks the decisive moment at which the artist confronts the canon upon its own rigorous terms, boldly usurping the grand artistic gesture of past movements to assert the primacy and presence of an African American narrative within the larger legacy of contemporary American painting. Following the creation of Past Times, Marshall would go on to produce an extraordinary body of work which, in its celebratory and unapologetic depiction of black subjects within a wide range of pictorial traditions, presents a radical and long-awaited counter-narrative to the canon. Further illustrating the significance of this painting within Marshall’s oeuvre, Past Times was amongst the most critically and publically lauded works featured in the artist’s celebrated exhibition Kerry James Marshall: Mastry, the major mid-career survey co-organized by the Museum of Contemporary Art in Chicago, the Metropolitan Museum of Art in New York, and the Museum of Contemporary Art in Los Angeles in 2016-2017. Hung beside other pivotal masterworks from the artist’s oeuvre, the panoramic vista of Past Times testifies to Marshall’s status, both as virtuosic renegade of canonical reform, and as one of the greatest history painters of our time. In their serene pursuit of activities typically assigned to affluent white suburbia – golfing, boating, lawn games—the figures of Past Times suggest the ultimate picture of American leisure. In the foreground of the painting, the figures of a woman and two children stand and lounge upon a cheery red and white checked blanket, while behind, a man completes his golf swing with a satisfying white zing! of motion, sending the ball flying towards the speedboat and water-skier in the middle distance with apparent unconcern. Encircling the three central figures, a scattering of overturned golf clubs, abandoned croquet balls, and upended stereos reinforce the suggestion of nonchalant affluence –even the Rottweiler, calmly curled on a corner of the picnic blanket, is at peace in this suburban idyll. Barely noticeable within this sun-drenched setting of blue skies and lush foliage, the far-off silhouettes of the Sears Tower, White Sox Stadium, and the Stateway Gardens housing projects upon the horizon subtly invoke the city of Chicago, where the artist lives and works; further locating the viewer in the area surrounding the Midwestern metropolis, the saturated azure depths of the lake suggest the vast network of lakes and reservoirs which dot wealthy suburbs of the Chicago area. Drifting from the upturned stereos on the picnic blanket, an undulating Motown melody from The Temptations croons It was just my imagination running away with me, while Snoop Dogg’s ritualistic mantra Got my mind on my money and my money on my mind escapes its counterpart to frame the figure of the boy; without interrupting the idyll of Marshall’s scene, these fragments indicate African American musical movements that were subverted and appropriated by white suburbia, reminding the viewer of the urgent issues of authorship and identity which lie at the core of the present work. Unfurling above this sublime scene, a partially legible banner reads “Who plays…all of heart and….skill / Will also work with heart and will,” ironically invoking the age-old promise of leisurely prosperity through hard work long-suggested by the so-called American Dream, and long withheld for innumerable black Americans. In their elegant nonchalance, the figures of Marshall’s pastoral vista invoke the sun-dappled picnickers of Claude Monet’s Luncheon on the Grass, or the playful strummers of Titian’s The Pastoral Concert; in Past Times, Marshall radically reverses the narrative, magnificently and unequivocally rendering black figures within the grand tradition of the pastoral landscape. Presenting a mix of lounging and standing figures and animals beside a glimmering expanse of water, Past Times is particularly evocative of Georges Seurat’s expansive A Sunday on La Grande Jatte, a painting held in the collection of the Art Institute of Chicago, a museum Marshall visited innumerable times. In a satirical nod to his post-modern predecessor, several clusters of perfect, palm-sized pastel circles dot Marshall’s scene, Seurat’s pointillism and primary colors reduced to little more than decorative flourish. Describing his art historical points of reference, Marshall explains, “My model for them was the genre of pastoral painting that extends from Giorgione’s Tempest to Edouard Manet’s Le Déjeuner sur l'herbe. The inhabitants of pastoral paintings are usually engaged in some very leisurely activity: lounging on the lawn, picnicking, enjoying each other’s company, listening to music. (The artist cited in Terri Sultan, Kerry James Marshall, New York, 2000, p. 120) The leisurely bucolic imagery of Past Times is particularly evocative of the tradition of the Fête galante; popularized in the French Rococo by such paintings as Watteau’s The Embarkation for the Island of Cythera of 1717, the term refers to paintings showing aristocrats freed from the confinement of court roles and etiquette to freely gambol in sumptuous Arcadian settings. Although Marshall has replaced Watteau’s pink roses with abstracted yellow daubs, his satins with ribbons of duct tape, and his tumbling cherubs with swooping bluebirds, within their suburban idyll, the African American men, women, and children of Past Times have likewise shed the roles traditionally prescribed to them in favor of one long withheld. Within the chromatic theatrics of this panoramic backdrop, the deliberate and dramatic darkness of Marshall’s figures casts the abysmal exclusion of black bodies from canonical art history into radical relief. In her essay for the 2016 Mastry catalogue, scholar Helen Molesworth remarks, “Blackness is not presented by Marshall as an afterthought or as a form of special pleading; it is offered as a radical presence that shows how the very notions of beauty and truth that paintings and museums hold to be self-evident are premised on exclusions that are ethically, philosophically, and aesthetically untenable.” (The artist cited in Exh. Cat., Chicago, Museum of Contemporary Art, Kerry James Marshall: Mastry, 2016, p. 37) When questioned about the uncompromising blackness of his figures, the artist himself remarked, “Extreme blackness plus grace equals power. I see the figures as emblematic; I’m reducing complex variations of tone to rhetorical dimension: blackness.” (The artist cited in Exh. Cat., Chicago, Museum of Contemporary Art, Kerry James Marshall: Mastry, 2016, p. 59) Offset by the crisp outlines of their white sporting attire, there is indeed an indisputable grace to the stark, monochrome elegance of these lounging figures. Intricately rendered yet utterly unreadable, the three central figures meet the viewer’s gaze, acknowledging the viewer’s presence with a stately, self-possessed calm reminiscent of Velazquez’s Las Meninas or Manet’s Le Déjeuner sur l’herbe; in their stoic stares, Marshall presents a radical rejoinder to Grant Wood’s iconic American Gothic, another work familiar from the artist’s frequent visits to the Art Institute. At once daring and evasive, the figures seem to question our presence and validity within the pictorial narrative as much as the viewer could question theirs. Citing Past Times as a superb example of Marshall’s innovative exploration of black figuration, scholar Lanka Tatterstall remarks, “Marshall has painted these figures in a way that is profoundly flat. Their gazes appear alternately determined, stoic, or slightly annoyed at the interruption of the viewer’s presence, as if their idyll has just been punctured….what resonates most strongly is the sense of the face as a marker of a void, a gap between desire and historical reality. The figures appear as placeholders for an imaginary past that perhaps did not really take place.” (Exh. Cat., Chicago, Museum of Contemporary Art, Kerry James Marshall: Mastry, 2016, pp. 60-61) The abstracted yellow daubs and feathery forms which decorate the picture plane emphasize the atmosphere of surrealism, continually reiterating its status as a painting: that is, an illusion. Painted in 1997, the present work marks the triumphant culmination of the artist’s celebrated Garden Project, a series of paintings investigating the daily life of African Americans living in urban housing projects through the canonical frame of pastoral landscape painting. Widely regarded as the artist’s first, triumphant artistic breakthrough, the majority of the Garden Project paintings are held the collections of such museums as the Denver Art Museum, the Art Institute of Chicago, and the Crystal Bridges Museum of American Art, amongst others. Inaugurated in 1994, the first five works in the series took as their explicit subject low-income housing projects in Chicago and Los Angeles which bore the word “Garden” in their names, emphasizing the bittersweet disparity between those flowery titles and the grim reality of the urbanized welfare state. In these lush, vibrant paintings, Marshall reimagines the inner-city projects as pastoral, Arcadian idylls, deftly appropriating the visual vernacular of canonical art history for piercing socio-political critique. Embracing the florid and fecund style of the Rococo, dripping rosettes of colorful pigment and lavish collage elements festoon the picture plane, effectively deploying the irreverent, decorative spirit of the late Baroque as a strategy for establishing the black figure within a grand art historical tradition. The emotive mix of fantasy and dread evoked by these bewitching paintings is likewise informed by personal experience: following his family’s cross-country move from Alabama to Los Angeles in the early 1960s, Marshall lived in the Nickerson Gardens housing project of Watts neighborhood, which appears as the subject of the Garden Project painting Watts, 1963. Marshall describes, “They had to do with the futility of trying to beautify large, institutional housing complexes that had been built by the federal government, originally as part of a Utopian idea of providing affordable housing to a growing population…They ended up becoming the opposite of what their names suggested.” He continues, “Not in spite of their present deterioration, the people who live in the projects live lives far richer and more complex than is suggested by the popular image in the American cultural mind…There is a huge gap between the pastoral names of these places and what they actually are, but the world of the people who inhabit the projects is still filled with incredible hope and possibility.”  (The artist cited in Terrie Sultan, Kerry James Marshall, New York, 2000, pp. 119-120) Initiated during a time of nation-wide scrutiny and debate surrounding inner-city public housing, the Garden Project paintings vividly illustrate the astonishing deterioration of the initiative in the 1990s: following the resignation of the entire board of the Chicago Housing Authority —the nation’s second-largest housing agency—in May of 1995, the organization was forcibly taken over by the national Department of Housing and Urban Development,  prompting Secretary of the Department of Housing Henry Cisneros to condemn Chicago as home to “the largest troubled public housing in the nation.” (Don Terry, “Chicago Housing Authority to be Taken Over by U.S.,” The New York Times, May 28, 1995, n.p.) Simultaneously spare and ornate, ideal and ironic, these paintings operate in the grand, time-honored tradition of the artist as chronicler of social truths, serving as poignant testament to the conflict between promised Utopias and dystopic realities which defines the grim history of welfare housing legislation in American cities. When first exhibited in 1997, the Garden Project series appeared with undeniable graphic charge; one viewer remarks, “Marshall realized a series of large-scale canvases, whose inclusion in Catharine David’s celebrated Documenta X, organized in the German city of Kassel in 1997, confirmed his global stature as one of the leading painters of his generation. These pictures were the Garden Project series.” (Exh. Cat., Chicago, Museum of Contemporary Art, Kerry James Marshall: Mastry, 2016, pp. 50-51) Between 1995 and 1997, Marshall would paint another three monumental canvases which, in their virtuosic appropriation of pastoral landscape techniques to render idyllic scenes of African American surburbia, take the first five Garden Project paintings as their point of thematic and stylistic departure; the last of these, Past Times marks both the culmination of this grand cycle and the inauguration of a new, extraordinary era in the artist’s celebrated oeuvre. Remarking upon the significance of Past Times, Marshall reflects, “I saw [Past Times] as performing closure for a particular way of working in the suburban paintings (such as Bang and Our Town), the Lost Boys paintings, the Garden Project paintings; works in which I was layering techniques drawn from a modernist tradition onto a classical model—all of those gestural marks and collage elements.” (The artist cited in Terrie Sultan, Kerry James Marshall, New York, 2000, pp. 119-120) With the conclusion of the Garden Project, the ubiquitous, flowerlike blotches and ribbons of paint which decorate the surfaces of the Garden Project paintings abruptly vanish from Marshall’s artistic repertoire. As the final painting in the cycle, this transition is already apparent in the present work: when compared with the dripping rosettes and intricately layered picture planes of the preceding seven paintings, the composition of Past Times is dramatically purified, the dense tapestry of deliberate smears and spills pulled to the side to reveal an exquisite clarity. Of this shift, Marshall comments: “Past Times was the last big pastoral painting that I felt I could honestly do in that style without simply repeating past successes. I could see that the challenge of that painting was coming to an end.” (Ibid., p. 120) In Past Times, Marshall achieves that which he set out to do at the start of the Garden Project series, and that which he continues to strive for in his practice: the non-negotiable assertion of the black figure within canonical modes of painting. Surveying the viewer from their suburban idyll, the searing figures of Past Times leave no doubt that they belong within the pastoral tradition which surrounds them, hung beside like masterworks of American painting in museums worldwide. Having demonstrated his indisputable mastery, Marshall can continue on, confronting and dismantling other canonical narratives built upon principles of exclusion, prejudice, and invisibility; describing the tireless impetus behind his practice, the artist remarks, “The urgency that drives you, that propels you into the studio every day, should be the desire to see figures as yet unrealized. If this is where your heart is, integrity will not be an issue.",
            "dimension": "108-1/4in X 157in",
            "date": "1997",
            "images": [
              "https://www.sothebys.com//content/dam/stb/lots/N09/N09858/1097N09858_9TT5D_web.jpg"
            ],
            "source": "https://www.sothebys.com/en/auctions/ecatalogue/2018/contemporary-art-evening-auction-n09858/lot.5A.html?locale=en"
        },
        {
            "title": "Black Painting",
            "description": "This painting depicts the apartment of Fred Hampton, an African American activist and the chairman of the Illinois chapter of the Black Panther Party. Kerry James Marshall captures Hampton asleep in bed just before he was shot and killed in an early morning raid by officers from the Chicago Police Department on December 4, 1969. The painting—at its very core—epitomizes darkness. Composed of shades of black acrylic paint on black fiberglass, the painting is at first nearly indecipherable, revealing itself as your eyes slowly adjust. Asleep in bed, Hampton is depicted as a near invisible man, conjuring the title of Ralph Ellison’s famous 1952 novel describing the African American experience of the early twentieth century. Hampton’s fiancée and fellow Black Panther, Akua Njeri, pregnant with their first child, has propped herself up in bed, her head turned as if listening. Does she hear police officers collecting outside their door? Is this the moment before the first shots were fired? With Black Painting, Marshall positions himself as both artist and archivist, using blackness as both medium and subject matter. The raid, which produced no police indictments, was one of the most controversial events to take place during the Civil Rights Movement.",
            "dimension": "72in x 108in",
            "date": "2003/2006",
            "images": [
              "http://utw10658.utweb.utexas.edu/files/fullsize/c297247d71cf4ae6a219d06253681285.jpg"
            ],
            "source": "http://utw10658.utweb.utexas.edu/items/show/2983"
          }
        ]
      }
    ]
  
    await Artist.insertMany(artists)
  console.log("Created artist!")
}
const run = async () => {
    await main()
    db.close()
}

run()