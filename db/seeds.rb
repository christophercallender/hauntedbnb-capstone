Bnb.destroy_all

puts "🎃 Seeding..."

Pumpkins = [
  [
    "Adams Grove Presbyterian Church",
    "Adams Grove Cemetery",
    "Sardis",
    "AL",
    "32.271944, -87.030556",
    "Adams Grove Presbyterian Church is a historic Greek Revival-style church building in rural Dallas County, Alabama, near the community of Sardis. Built in 1853, it features a distyle-in-antis type portico with box columns. No longer actively used by a church congregation, the building is now privately owned. It was placed on the National Register of Historic Places on June 5, 1986. The church and the adjacent cemetery in Dallas County are reportedly haunted.",
    "https://upload.wikimedia.org/wikipedia/commons/0/05/Sardis_Alabama_Adams_Grove_Presbyterian_01.JPG"
  ],
  [
    "Drish House",
    "2300 17th St",
    "Tuscaloosa",
    "AL",
    "33.197550, -87.561850",
    "The house has been the site of purported hauntings since the early 20th century. It was featured in Kathryn Tucker Windham and Margaret Gillis Figh's book 13 Alabama Ghosts and Jeffrey, in the short story \"Death Lights in the Tower.\" Alleged supernatural events over the years have included people reportedly seeing the third-story tower on fire, when no fire is present, and ghostly lights coming out of the house.",
    "https://upload.wikimedia.org/wikipedia/commons/a/a4/Drish_Mansion_1911.jpg"
  ],
  [
    "Gaineswood",
    "805 S Cedar Ave",
    "Demopolis",
    "AL",
    "32.508192, -87.833683",
    "Gaineswood in Demopolis is reportedly haunted by the ghost of a former housekeeper from Virginia. She was in charge of running the house for General Whitfield after the death of his wife. Her ghost supposedly plays the piano in the music room.",
    "https://upload.wikimedia.org/wikipedia/commons/e/e4/Gaineswood_in_October_2011_01.JPG"
  ],
  [
    "Kenworthy Hall",
    "23200 AL-14",
    "Marion",
    "AL",
    "32.635278, -87.352222",
    "Kenworthy Hall near Marion has a fourth-floor tower room that is alleged to be haunted by the ghost of a young woman. She sits in a window awaiting the return of a lover who died during the American Civil War. The house and purported ghost are featured in a short story in Kathryn Tucker Windham's 13 Alabama Ghosts and Jeffrey.",
    "https://upload.wikimedia.org/wikipedia/commons/d/da/Kenworthy_Hall_08.jpg"
  ],
  [
    "Redmont Hotel",
    "2101 5th Ave N",
    "Birmingham",
    "AL",
    "33.518733, -86.806392",
    "In 1946 the hotel was purchased by businessman and hotel magnate Clifford Stiles. In 1947 Stiles converted the entire top floor into a New York-style penthouse apartment for himself and his family. This elegant penthouse was complete with terraces, private elevator, a lawn for pets and was the scene of many glamorous parties. Some say that Stiles, who died in 1975, still haunts the building.",
    "https://honeymoongoals.com/wp-content/uploads/2021/08/redmont.jpg"
  ],
  [
    "Sturdivant Hall",
    "713 Mabry St",
    "Selma",
    "AL",
    "32.413056, -87.028889",
    "Sturdivant Hall is featured in a short story by Kathryn Tucker Windham, in her 13 Alabama Ghosts and Jeffrey. The story, \"The Return of the Ruined Banker\", is based on a real-life event in which Parkman was killed in a train wreck in 1901. The house was built in 1890 by Parkman's father, and was the site of a bank that Parkman managed. The bank failed in 1893, and Parkman was forced to leave the house. He died in 1901, and his ghost is said to haunt the house. The house is located in the historic district of downtown Montgomery.",
    "https://upload.wikimedia.org/wikipedia/commons/1/12/Sturdivant_Hall_01.jpg"
  ],
  [
    "Sweetwater Mansion",
    "1050 Sweetwater Ave",
    "Florence",
    "AL",
    "34.824520, -87.642870",
    "Stories of paranormal activity have been told about the house for many years. Numerous apparitions have allegedly been seen in and around the house. One of the most interesting stories involves a caretaker who reported that she saw a casket laid out in one of the downstairs rooms with the corpse of a Confederate soldier inside. She later discovered she had possibly seen the body of one of Governor Patton's sons, Billy Patton, whose funeral was conducted in the house after he was killed in the Civil War. Local paranormal investigators have investigated the property and Sweetwater Mansion was featured in an episode of A&E's Paranormal State on April 25, 2011. Billy was mourned by his mother Jane Patton who was so distraught and depressed after her loss, that she didn't want to bury her son's body and kept his decomposing corpse in a secret room in the basement. Paranormal investigators believe Jane's sorrowful spirit still haunts the house. Sweetwater Mansion was also featured as a haunted location on the paranormal TV series Most Terrifying Places which aired on the Travel Channel in 2019.",
    "https://upload.wikimedia.org/wikipedia/commons/f/f4/Sweetwater_Mansion_Florence.jpg"
  ],
  [
    "Copper Queen Hotel",
    "11 Howell Ave",
    "Bisbee",
    "AZ",
    "31.442400, -109.914300",
    "The Copper Queen is allegedly haunted and has been featured on at least two paranormal investigation shows; the third season of Ghost Hunters and the sixth season of Ghost Adventures. Perhaps the most famous ghost is that of a woman in her 30s by the name of Julia Lowell. It is said that she was a prostitute and she used the hotel for her and her clients. She fell madly in love with one of her clients; when she told him of her feelings he no longer wanted to see her, and she took her own life at the hotel. Guests and staff at the hotel say that they feel her presence on the second and third floors of the west side of the building. Male staff and guests have reported hearing a female voice whispering in their ear. Others have also reported seeing her dancing provocatively at the foot of the stairs. The hotel was the subject of an episode of the Travel Channel show Resort Rescue. The episode featured a drunken streaker running around the hotel at midday.",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/a4/42/ff/built-in-1902-the-copper.jpg?w=1200&h=-1&s=1"
  ],
  [
    "Hotel Monte Vista",
    "100 N San Francisco St",
    "Flagstaff",
    "AZ",
    "35.198200, -111.647300",
    "Hotel Monte Vista was built in 1927 and is a centerpiece of the historic downtown district. Many famous people have spent the night at the Hotel Monte Vista, including Hollywood actors and actresses: John Wayne, Spencer Tracy, Humphrey Bogart, Clark Gable, Anthony Hopkins, Esther Williams, and Barbara Stanwyck. The hotel is located at 100 North San Francisco Street. The Monte Vista Lounge, or \"Monte V\" as it is known, is a popular bar and entertainment venue. There have been many alleged ghost sightings at the Hotel Monte Vista. One of the sightings involves a \"Phantom Bell Boy\" that knocks on guests' doors in the middle of the night and will talk to the guest.",
    "https://www.routemagazine.us/assets/stories/monte-v-0003.jpg"
  ],
  [
    "Queen Anne Hotel",
    "1590 Sutter St",
    "San Francisco",
    "CA",
    "37.787222, -122.426667",
    "The Queen Anne Hotel in San Francisco is a historic hotel in Pacific Heights. The hotel is a 1890 Victorian mansion, in the namesake Queen Anne architectural style, and decorated in the painted lady style. It narrowly survived the 1906 San Francisco earthquake. It was originally a girl's boarding school in the 1800s. The headmaster, Mary Lake, is believed to still haunt the hotel.",
    "https://upload.wikimedia.org/wikipedia/commons/e/e9/1590_Sutter_Queen_Anne_SF_CA.JPG"
  ],
  [
    "Pioneer Park",
    "437 W Bleeker St",
    "Aspen",
    "CO",
    "39.193056, -106.826667",
    "Pioneer Park in Aspen is reportedly haunted by the ghost of Harriet Webber, who died of what was ruled to be an accidental strychnine overdose during 1881, four years before it was built. Her husband, Henry Webber, was a shoe merchant who grew wealthy from his mining investments during Aspen's growth during the Colorado Silver Boom.",
    "https://upload.wikimedia.org/wikipedia/commons/3/31/Henry_Webber_House%2C_Aspen%2C_CO.jpg"
  ],
  [
    "Stanley Hotel",
    "333 E Wonderview Ave",
    "Estes Park",
    "CO",
    "40.383333, -105.518333",
    "Stanley Hotel in Estes Park Colorado, was built by a Massachusetts couple named F.O. and Flora Stanley. They lived there, and reportedly never left. Staff says Flora can be heard playing her piano at night. If you take a picture in the hotel, it is said Mr. Stanley can show up at any time in that picture. Children can be heard running up and down the halls. This lovely mountain resort in the Colorado wilderness was the inspiration for Stephen King's thriller, The Shining. Despite a peaceful early history, in the years following the publication of The Shining, the Stanley Hotel gained a reputation as a setting for paranormal activity. It has hosted numerous paranormal investigators and appeared in shows such as Ghost Hunters and Ghost Adventures. The hotel also offers guided tours which feature spaces reputed to be exceptionally active.",
    "https://www.mercurynews.com/wp-content/uploads/2022/09/021105_00_N64_large.webp?w=810"
  ],
  [
    "Benton Homestead",
    "154 Metcalf Rd",
    "Tolland",
    "CT",
    "41.851863, -72.377076",
    "Daniel Benton Homestead is a historic house museum in Tolland, Connecticut. It is reputedly haunted by the ghosts of Hessian soldiers and 18th-century lovers Elisha Benton and Jemima Barrows, who tragically died from smallpox. In 1934, the Chapin family, which was descended from the Bentons, sold the house to WTIC radio host and University of Connecticut dietetics instructor Florrie Bishop Bowering. Bowering's maid reportedly saw the specter of a young woman in a bridal dress wandering through the house and weeping. Other visitors reported unexplained lights, sounds, and apparitions.",
    "https://upload.wikimedia.org/wikipedia/commons/6/69/Daniel_Benton_Homestead.jpg"
  ],
  [
    "Norwich State Hospital",
    "Poquetanuck",
    "Preston",
    "CT",
    "41.489167, -72.073333",
    "The Norwich State Hospital, originally established as Norwich State Hospital for the Insane and later shortened to Norwich Hospital, was a psychiatric hospital that is located in Preston and Norwich, Connecticut. It opened its doors in October 1904 and it remained operational until October 10, 1996. Throughout its years of operation, it housed geriatric patients, chemically dependent patients and, from 1931 to 1939, tubercular patients. Before the majority of it was demolished, there were reports of lamenting patients near the Salmon building and the lobotomy room. It was featured on Ghost Hunters (TV series) season 6, episode 10.",
    "https://www.indianz.com/News/2016/05/13/norwichstatehospital.jpg"
  ],
  [
    "Don CeSar Hotel",
    "3400 Gulf Blvd",
    "St Pete Beach",
    "FL",
    "27.708889, -82.737500",
    "The Don CeSar Hotel is reportedly haunted by the ghost of its original owner, Thomas Rowe, who built the Moorish-style \"Pink Palace\" in 1926. He was forbidden to marry the love of his life, a singer in the opera Maritana, by her parents. He built the Don CeSar in remembrance of her, and named it after a character in the opera. \"Time is infinite. I wait for you by our fountain\", she wrote to him on her deathbed, and after his own death, it was reported that they were seen meeting by the fountain in the hotel lobby. Two-hour long ghost tours of the hauntings at the Don CeSar are offered by a local sightseeing company.",
    "https://upload.wikimedia.org/wikipedia/commons/2/21/Don_Cesar.jpg"
  ],
  [
    "Ellis Hotel",
    "176 Peachtree St NW",
    "Atlanta",
    "GA",
    "33.758300, -84.387800",
    "The Ellis Hotel (previously the Winecoff Hotel) is best known for a fire that occurred there on December 7, 1946, in which 119 people died. It remains the deadliest hotel fire in U.S. history.",
    "https://upload.wikimedia.org/wikipedia/commons/5/5d/Hotel_Ellis.jpg"
  ],
  [
    "Moon River Brewing Company",
    "21 W Bay St",
    "Savannah",
    "GA",
    "32.081004, -81.092020",
    "The building is alleged to be haunted, is a feature of local guided tours,[7] and claimed by staff members to be a site of hauntings and poltergeist activity. Ghost hunters believe people who died during the city's yellow fever outbreak of 1876 haunt Moon River because they say building was used as a makeshift hospital during the epidemic. The building is claimed to be haunted by a 'Lady in White'. as well as the spirit of James Stark, a gambler who was killed in an altercation with a town physician Dr. Philip Minus while on the staircase of the old City Hotel in 1832. According to the TV show Ghost Adventures, contractors have had run-ins with Stark's spirit while trying to renovate the upper floors. Moon River Brewery was also featured as a haunted location on paranormal TV series Most Terrifying Places which aired on the Travel Channel in 2019.",
    "https://upload.wikimedia.org/wikipedia/commons/8/8f/Moon_River_Brewing_Company_-_Savannah%2C_Georgia%2C_USA.jpg"
  ],
  [
    "Pocatello High School",
    "325 N Arthur Ave",
    "Pocatello",
    "ID",
    "42.863000, -112.454000",
    "Since the 1950's, there have been sightings and reports of paranormal activity on the property. A security camera in the Pocatello High School captured a translucent figure going down a hallway and in and out of a bathroom when the school was closed for winter break in 2014. People report hearing voices in conversation and the sound of a piano inside the school's otherwise empty theater. In 2019 Ghost Hunters (TV series) investigated the school for the first episode of the 13th season.",
    "https://bloximages.chicago2.vip.townnews.com/idahostatejournal.com/content/tncms/assets/v3/editorial/8/bb/8bb72e91-bed0-5b1f-98b5-75a9b83ce1ac/5d804dda10ce1.image.jpg"
  ],
  [
    "Historical Society Building",
    "640 N Dearborn St",
    "Chicago",
    "IL",
    "41.893589, -87.629958",
    "The Chicago Historical Society Building has been said to be haunted, the claim arose from its use as a makeshift morgue for victims of the Eastland Disaster of 1915 although no bodies were ever brought to the building. The building has been the site of several television shows on the paranormal, and is the site of a weekly theatrical show about hauntings, Supernatural Chicago, hosted by Neil Tobin. An annual seance which attempts to reach deceased magician, Harry Houdini, is presented there by the Chicago Assembly of the Society of American Magicians, partnered with Tobin. In 1999, the building was featured on an episode of Exploring the Unknown on Fox Family TV about the Ouija board. In 2012, the building was featured on an episode of Ghost Adventures.",
    "https://upload.wikimedia.org/wikipedia/commons/5/50/Chicago_Historical_Society%2C_632_North_Dearborn_Street%2C_Chicago_%28Cook_County%2C_Illinois%29.jpg"
  ],
  [
    "Crenshaw House",
    "4325 Crenshaw Ln",
    "Equality",
    "IL",
    "37.730278, -88.292500",
    "The house was constructed in the 1830s as a station on the Reverse Underground Railroad. In 1978, a reporter from Harrisburg named David Rodgers spent the night in the attic as a Halloween stunt for a local television station. The reporter managed to beat out nearly 150 previous challengers and became the first person to spend the night in the slave quarters in more than a century. Rodgers later admitted that he was 'queasy' going into the house and also said that his experience in the attic was anything but mundane. He heard many sounds that he could not identify and later, he would discover that his recorder picked up voices that he himself could not hear.",
    "https://upload.wikimedia.org/wikipedia/commons/5/56/The_Old_Slave_House.jpg"
  ],
  [
    "Hull House",
    "800 S Halsted St",
    "Chicago",
    "IL",
    "41.871667, -87.647500",
    "Over the years, numerous stories of ghosts and hauntings have surrounded Hull House, making it a stop on many of the \"ghosts in Chicago\" tours. Charles Hull's wife had died in the house in 1860 and is sometimes thought to haunt it. Other candidates for resident ghosts include the many people who died there of natural causes in the 1870s when it was used as a home for the aged by the Little Sisters of the Poor. In 1913, another Hull House ghost story began circulating. According to this legend, after a man claimed that he would rather have the Devil in his house than a picture of The Virgin Mary, his child was born with pointed ears, horns, scale-covered skin, and a tail. The mother was said to have taken the baby to Hull House, where Addams was said to have attempted to have it baptized and wound up locking it in the attic. Addams is known to have spoken to several friends about one of the front bedrooms on the second floor being haunted – she and a friend once thought they saw a \"woman in white\" ghost there, and the same ghost was later seen by a group of girls when the room was used as a dressing room for the adjacent theater. Though Addams called it \"haunted,\" she seems to have been more amused than frightened by it.",
    "https://chicagology.com/wp-content/themes/revolution-20/chicagoimages4/hullhousehalstedpolkfront1902.jpg"
  ],
  [
    "McPike Mansion",
    "A2018 Alby St",
    "Alton",
    "IL",
    "38.905833, -90.183333",
    "According to the owner, the mansion is allegedly haunted by the ghost of a former owner and a former domestic servant. It frequently is a part of the area's many haunted tours. The entire city of Alton is stated to be the \"Most haunted small town in America\" by the Travel Channel.",
    "https://upload.wikimedia.org/wikipedia/commons/8/82/McPike_Mansion%2C_September_2017.jpg"
  ],
  [
    "Peoria State Hospital",
    "Ricketts Ave",
    "Bartonville",
    "IL",
    "40.638611, -89.661667",
    "Originally named the Illinois Asylum for the Incurably Insane from 1907 to 1908, but later renamed to the Peoria State Hospital in 1909. An additional name for it is the \"Bartonville Insane Asylum\". The hospital grounds are the subject of local ghost lore. One well documented legend tells of Manuel A. Bookbinder \"Old Book\", a patient who worked with the burial crew at the hospital until his own death. It is said that upon his death his physical form was seen by Dr. Zeller and over a hundred of the patients and nurses that attended his funeral crying at the old elm in the potters field. A closer inspection of the casket for which he rested showed the peaceful remains of the loved figure still resting within, thus the legend of the \"Graveyard Elm\" began. In the 1920s, Zeller penned a book titled, Befriending The Bereft, drawn from the mysterious experiences he had at the hospital during his two tenures as superintendent, 1902–1913 and 1921–1935. Included, among numerous other eerie stories, were Zeller's own account of Old Book and the Graveyard Elm. The paranormal claims of Peoria State Hospital were investigated by The Atlantic Paranormal Society (TAPS) in the TV show Ghost Hunters.",
    "https://upload.wikimedia.org/wikipedia/commons/e/ee/Peoria_State_Hospital.jpg"
  ],
  [
    "Culbertson Mansion",
    "914 E Main St",
    "New Albany",
    "IN",
    "38.286467, -85.812922",
    "The Culbertson Mansion is open to public tours, and visitors and the curators have claimed to have seen a ghostly figure in the building. They believe her to be the ghost of the owner's second wife who returned to protect her children from her husband's third wife. The mansion's carriage barn is turned into a haunted house during Halloween, and many tour the building then in hopes of sighting the ghosts. Nearby the mansion is the carriage house. In 1933, it was sold to a Dr. Harold Webb, who moved in with his family. He set up a practice in the home and began to gain a number of patients. Over time, several patients went missing and his family began to notice strange noises and smells coming from the basement. In 1934, after a patient found the home locked at the time of their appointment and called the police, an investigation took place. Upon entering the home, the police found the entire family dead, each by torturous means of death. After further searching the home, the basement was found to have secret passageways where the doctor had kept the missing patients and performed gruesome experiments on them. After the cleanup, the building was locked up, but finally sold to the American Legion, who restored the building. When it was finally reopened, visitors noted unusual electrical problems, missing items, and other unexplained occurrences. The house now serves as a haunted house on Halloween and the proceeds benefit the restoration and maintenance of the mansion of the estate.",
    "https://upload.wikimedia.org/wikipedia/commons/1/1f/Culbertson_Mansion_front.jpg"
  ]
]

Pumpkins.map do |name, street, city, state, coordinates, summary, image_url|
  Bnb.create(
    name: name,
    street: street,
    city: city,
    state: state,
    coordinates: coordinates,
    summary: summary,
    image_url: image_url
  )
end

Bnb.all.each do |bnb|
  bnb.price = rand(50..500)
  bnb.save
end

puts "👻 Seeded!!!"
