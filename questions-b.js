/* Indiana Permit Quest: question bank, part 3 (safe driving deep dive)
 * Appended to QUESTIONS from questions.js. Format matches the original bank. */
QUESTIONS = QUESTIONS.concat([
/* ---------- PASSING AND LANE USE ---------- */
{ cat: "Safe Driving",
  q: "When passing another vehicle, how soon must you be back in the right lane before meeting oncoming traffic?",
  options: [
    "50 feet",
    "No less than 100 feet before any oncoming vehicle",
    "500 feet",
    "One car length"
  ],
  answer: 1,
  why: "When passing, you must return to the right side of the road no less than 100 feet before any oncoming vehicle.",
  ref: "Ch. 7, p. 38" },
{ cat: "Safe Driving",
  q: "You are passing a car on a two-lane road. When is it safe to move back into your lane?",
  options: [
    "Immediately, to get away from oncoming traffic",
    "Only after honking",
    "After you can see the vehicle you passed in your rearview mirror, signaling first",
    "As soon as you are past its front bumper"
  ],
  answer: 2,
  why: "Move into the passing lane, accelerate, and continue until you can see the vehicle you are passing in your rearview mirror before returning to your lane, signaling first.",
  ref: "Ch. 7, p. 38" },
{ cat: "Safe Driving",
  q: "Another driver is passing you on the left. What should you do?",
  options: [
    "Flash your high beams",
    "Move left to block them",
    "Speed up so they cannot pass",
    "Allow the vehicle to pass safely and do not increase your speed"
  ],
  answer: 3,
  why: "If another vehicle is passing you on the left, allow it to pass safely and do not increase your speed.",
  ref: "Ch. 7, p. 38" },
{ cat: "Safe Driving",
  q: "Which of these is an illegal place to pass?",
  options: [
    "A four-lane highway",
    "An empty rural road",
    "Where a solid yellow line is on your side of the center line",
    "A straight road with a broken yellow center line"
  ],
  answer: 2,
  why: "It is dangerous and illegal to pass where a solid yellow line is on the driver's side of the center line.",
  ref: "Ch. 7, p. 38" },
{ cat: "Safe Driving",
  q: "Passing is dangerous and illegal in all of these spots EXCEPT:",
  options: [
    "Approaching the crest of a hill",
    "On a straight, level road with a broken yellow line and clear sight distance",
    "On or approaching a curve",
    "Within 100 feet of an intersection, railroad crossing, bridge, viaduct, or tunnel"
  ],
  answer: 1,
  why: "Never pass on or approaching a curve, approaching the crest of a hill, or within 100 feet of an intersection, railroad crossing, bridge, viaduct, or tunnel.",
  ref: "Ch. 7, p. 38" },
/* ---------- INTERSTATE DRIVING ---------- */
{ cat: "Safe Driving",
  q: "You are entering an interstate from an on-ramp. Who has the right of way?",
  options: [
    "Trucks must yield to you",
    "Vehicles already on the interstate; you must yield to them",
    "You, because you are merging at speed",
    "Whoever is going faster"
  ],
  answer: 1,
  why: "Drivers entering an interstate must yield the right of way to vehicles already on the interstate.",
  ref: "Ch. 7, p. 49" },
{ cat: "Safe Driving",
  q: "You miss your exit on the interstate. What should you do?",
  options: [
    "Stop and wait for a gap, then cut across",
    "Back up on the shoulder to reach the exit",
    "Make a U-turn across the median",
    "Drive to the next exit; it is unsafe to back up on an interstate"
  ],
  answer: 3,
  why: "It is unsafe to back up on an interstate to reach a missed exit. If you miss an exit you must drive to the next exit.",
  ref: "Ch. 7, p. 49" },
{ cat: "Safe Driving",
  q: "When may you make a U-turn by crossing an interstate median or crossover?",
  options: [
    "If you missed your exit",
    "When traffic is light",
    "At night when no one is watching",
    "Only if you are driving an emergency or highway maintenance vehicle; it is illegal for anyone else"
  ],
  answer: 3,
  why: "It is illegal for any vehicle other than an emergency or highway maintenance vehicle to make a U-turn by crossing the median or crossover of an interstate.",
  ref: "Ch. 7, p. 49" },
{ cat: "Safe Driving",
  q: "May you stop or park on an interstate shoulder to check your phone?",
  options: [
    "Only at night",
    "Yes, if your hazard lights are on",
    "No, except in an emergency or for a disabled vehicle",
    "Yes, briefly"
  ],
  answer: 2,
  why: "Except in an emergency or for a disabled vehicle, do not stop or park on the shoulder of an interstate.",
  ref: "Ch. 7, p. 49" },
{ cat: "Safe Driving",
  q: "On a two-lane section of interstate, which lane must trucks use?",
  options: [
    "The right lane",
    "The shoulder",
    "Either lane",
    "The left lane"
  ],
  answer: 0,
  why: "Trucks are restricted to the right lane on two-lane interstate sections, and to the right two lanes on interstates with three or more lanes in one direction.",
  ref: "Ch. 7, p. 49" },
/* ---------- WORK ZONES ---------- */
{ cat: "Safe Driving",
  q: "You see work zone signs ahead and traffic needs to merge. What does the manual recommend?",
  options: [
    "Stop until the lane is completely clear",
    "Drive on the shoulder to pass the line",
    "Race to the front, then merge",
    "Merge early; traffic flows more smoothly when drivers merge at the first sight of signs"
  ],
  answer: 3,
  why: "Merge early: if merging at the first sight of signs, traffic will flow more smoothly.",
  ref: "Ch. 7, p. 50" },
{ cat: "Safe Driving",
  q: "A flagger in a work zone extends a fluorescent orange/red flag horizontally into your lane. What must you do?",
  options: [
    "Slow down and wave",
    "Stop; you may proceed at reduced speed only when the flagger directs you",
    "Honk to acknowledge the flagger",
    "Change lanes and keep going"
  ],
  answer: 1,
  why: "You must stop when a flagger extends a flag horizontally into the line of traffic. On a signal paddle, stop or proceed slowly according to the STOP or SLOW message.",
  ref: "Ch. 7, p. 50" },
/* ---------- ROUNDABOUTS ---------- */
{ cat: "Safe Driving",
  q: "Inside a roundabout's circulatory roadway, what should you NOT do?",
  options: [
    "Yield to traffic already circulating",
    "Change lanes inside the roundabout",
    "Exit through a right turn",
    "Slow down on entry"
  ],
  answer: 1,
  why: "Do not change lanes in the circulatory roadway of a roundabout. Incoming traffic always yields to circulating traffic.",
  ref: "Ch. 7, p. 40" },
/* ---------- BRAKING DISTANCES ---------- */
{ cat: "Safe Driving",
  q: "At 55 mph, about how far does the average passenger car need to stop?",
  options: [
    "300 feet",
    "50 to 60 feet",
    "One car length for every 10 mph",
    "Approximately 130 to 140 feet, about half a football field"
  ],
  answer: 3,
  why: "The average passenger car at 55 mph can stop in approximately 130 to 140 feet, about half a football field.",
  ref: "Ch. 7, p. 42" },
{ cat: "Safe Driving",
  q: "A fully loaded tractor-trailer with hot brakes may need how far to stop from highway speed?",
  options: [
    "About the same as a car",
    "50 feet",
    "200 feet",
    "More than 400 feet, longer than a football field"
  ],
  answer: 3,
  why: "A fully loaded tractor-trailer with hot brakes may take more than 400 feet to stop, more than a football field.",
  ref: "Ch. 7, p. 42" },
/* ---------- TIRES ---------- */
{ cat: "Safe Driving",
  q: "What should you compare your measured tire pressure against?",
  options: [
    "The number printed on the tire sidewall",
    "Whatever the gas station air pump suggests",
    "The sticker inside the driver's door jamb or the owner's manual",
    "Your best guess"
  ],
  answer: 2,
  why: "Compare measured pressure to the sticker inside the driver's door jamb or the owner's manual, not the tire sidewall. Check all tires, including the spare, once a month or before a long trip, when cold.",
  ref: "Ch. 7, p. 45" },
{ cat: "Safe Driving",
  q: "Using the penny test, when is your tire tread still legal and safe?",
  options: [
    "When you can see the top of Lincoln's head",
    "When any part of Lincoln's head is covered by tread at the lowest-tread point",
    "Only when the tires are brand new",
    "When the penny slides easily across the tread"
  ],
  answer: 1,
  why: "Place Lincoln's head into a tread groove at the lowest-tread point. Below that (approximately 1/16 of an inch), grip in adverse conditions is greatly reduced.",
  ref: "Ch. 7, p. 45" },
/* ---------- WEATHER ---------- */
{ cat: "Safe Driving",
  q: "What is hydroplaning?",
  options: [
    "Driving through a car wash",
    "Overheating in summer traffic",
    "A type of skid on dry pavement",
    "On wet roads the vehicle rides on a thin layer of oil, dirt, and water, with no friction to brake, speed up, or turn"
  ],
  answer: 3,
  why: "When hydroplaning, a gust of wind, change of road level, or slight turn can cause loss of control.",
  ref: "Ch. 7, p. 45" },
{ cat: "Safe Driving",
  q: "When must you use your headlights?",
  options: [
    "Only when it is raining",
    "Only after dark in cities",
    "Only on rural roads",
    "Between sunset and sunrise, and any other time visibility is less than 500 feet"
  ],
  answer: 3,
  why: "Headlights must be used between sunset and sunrise and at any other time visibility is less than 500 feet.",
  ref: "Ch. 7, p. 46" },
{ cat: "Safe Driving",
  q: "When must you switch to lower headlight beams?",
  options: [
    "Within 500 feet of an oncoming vehicle, or within 200 feet behind another vehicle",
    "Whenever you feel like it",
    "Only on interstates",
    "Only in fog"
  ],
  answer: 0,
  why: "Lower headlight beams must be used when approaching within 500 feet of an oncoming vehicle or when following within 200 feet of the rear of another vehicle.",
  ref: "Ch. 7, p. 46" },
{ cat: "Safe Driving",
  q: "You are driving in fog. How should you use your headlights?",
  options: [
    "Use only parking lights",
    "Turn your headlights off so others can see you",
    "Do not use high beams; low beams better illuminate the road, and use headlights plus flashing emergency signals",
    "Use high beams to see farther"
  ],
  answer: 2,
  why: "In fog, do not use high headlight beams. If visibility drops to near zero, carefully pull off the road as far as possible and stop.",
  ref: "Ch. 7, p. 46" },
{ cat: "Safe Driving",
  q: "After driving through water puddles, what should you do?",
  options: [
    "Stop immediately on the shoulder",
    "Test your brakes by pumping them to dry them",
    "Speed up to dry the brakes",
    "Nothing; brakes dry themselves instantly"
  ],
  answer: 1,
  why: "After driving through water puddles, test brakes by pumping them to dry them.",
  ref: "Ch. 7, p. 46" },
{ cat: "Safe Driving",
  q: "Floodwater covers the road ahead and a barricade blocks the lane. What should you do?",
  options: [
    "Speed through to avoid stalling",
    "Follow the car ahead of you through",
    "Do not drive around barricades or past road-closed signs, and do not drive where water is over the road",
    "Drive around the barricade if the water looks shallow"
  ],
  answer: 2,
  why: "Flash flood rules: do not drive around traffic barricades or past road-closed signs, and do not drive where water is over the road.",
  ref: "Ch. 7, p. 47" },
{ cat: "Safe Driving",
  q: "Your car stalls in a flooded area. What should you do?",
  options: [
    "Abandon the car as soon as possible; floodwaters can rise rapidly and sweep a car and its occupants away",
    "Stay inside and wait for the water to recede",
    "Open all the doors to let water flow through",
    "Try to restart the engine repeatedly"
  ],
  answer: 0,
  why: "If your car stalls in a flooded area, abandon it as soon as possible because floodwaters can rise rapidly.",
  ref: "Ch. 7, p. 47" },
{ cat: "Safe Driving",
  q: "According to the manual, which roadway weather event causes the most deaths each year?",
  options: [
    "Flash flooding",
    "Hail",
    "Tornadoes",
    "Snowstorms"
  ],
  answer: 0,
  why: "Flash flooding causes more deaths than any other roadway weather event each year.",
  ref: "Ch. 7, p. 47" },
/* ---------- NIGHT DRIVING ---------- */
{ cat: "Safe Driving",
  q: "At night, how can you avoid being blinded by oncoming headlights?",
  options: [
    "Stare directly into them",
    "Turn on your high beams in response",
    "Do not look directly into oncoming lights; focus on the right side of the road",
    "Close one eye"
  ],
  answer: 2,
  why: "At night reduce normal speed, especially on unfamiliar roads. To avoid headlight glare, do not look directly into oncoming lights.",
  ref: "Ch. 7, p. 47" },
/* ---------- FATIGUE, DISTRACTION, AGGRESSION ---------- */
{ cat: "Safe Driving",
  q: "Going 18 hours without sleep leaves a driver about as impaired as a driver with what BAC?",
  options: [
    ".02",
    ".08",
    ".15",
    ".05"
  ],
  answer: 1,
  why: "Going 18 hours without sleep leaves a driver equally impaired as a driver with a .08 BAC.",
  ref: "Ch. 7, p. 47" },
{ cat: "Safe Driving",
  q: "About how many fatal crashes nationally involve a fatigued driver?",
  options: [
    "An estimated 16.5 percent of all fatal crashes",
    "50 percent",
    "90 percent",
    "1 percent"
  ],
  answer: 0,
  why: "Nationally an estimated 16.5 percent of all fatal crashes involve a fatigued driver.",
  ref: "Ch. 7, p. 47" },
{ cat: "Safe Driving",
  q: "Which age group accounts for 64 percent of fatigue-related accidents?",
  options: [
    "Drivers age 30 to 45",
    "Drivers over 65",
    "Young adults age 16 to 29",
    "Commercial drivers"
  ],
  answer: 2,
  why: "Young adults age 16 to 29 account for 64 percent of fatigue-related accidents.",
  ref: "Ch. 7, p. 47" },
{ cat: "Safe Driving",
  q: "Sending or reading a text takes your eyes off the road for about 5 seconds. At 55 mph, that is like what?",
  options: [
    "Missing one road sign",
    "Driving the length of an entire football field with your eyes closed",
    "Glancing at the radio",
    "A normal lane change"
  ],
  answer: 1,
  why: "Texting is the most alarming distraction: sending or reading a text takes your eyes off the road for 5 seconds.",
  ref: "Ch. 7, p. 48" },
{ cat: "Safe Driving",
  q: "Under Indiana law, aggressive driving means committing at least how many of the listed risky behaviors during one continuous episode of driving?",
  options: [
    "At least seven",
    "At least five",
    "At least three",
    "Just one"
  ],
  answer: 2,
  why: "Examples include following too closely, unsafe vehicle operation, overtaking on the right by driving off the roadway, unsafe stopping or slowing, unnecessary sounding of the horn, failure to yield, failure to obey a traffic control device, driving at an unsafe speed, and repeatedly flashing headlights.",
  ref: "Ch. 7, p. 48" },
{ cat: "Safe Driving",
  q: "About one-third of all Indiana traffic fatalities are caused by what the manual calls dangerous driving. What counts as dangerous driving?",
  options: [
    "Listening to the radio",
    "Driving an older car",
    "Driving at night",
    "Aggressive driving, disregarding a signal, or speeding"
  ],
  answer: 3,
  why: "Approximately one-third of all Indiana traffic fatalities occur due to dangerous driving: aggressive driving, disregarding a signal, or speeding.",
  ref: "Ch. 7, p. 48" },
/* ---------- RURAL ROADS ---------- */
{ cat: "Safe Driving",
  q: "Before approaching the crest of a steep hill, what should you do?",
  options: [
    "Slow down, move to the right side of the road, and watch for oncoming vehicles",
    "Move to the left for a better view",
    "Pass the slow car ahead of you",
    "Speed up to get over quickly"
  ],
  answer: 0,
  why: "Never attempt to pass when approaching a steep hill or crest.",
  ref: "Ch. 7, p. 48" },
{ cat: "Safe Driving",
  q: "On a dirt road during a dry period, dust is reducing visibility. What should you do?",
  options: [
    "Turn your lights off",
    "Use high beams",
    "Drive in the middle of the road",
    "Use low beam headlights to be more visible to other drivers"
  ],
  answer: 3,
  why: "On dirt roads in dry periods, dust can reduce visibility, so use low beam headlights to be more visible to other drivers.",
  ref: "Ch. 7, p. 49" },
/* ---------- SEAT BELTS AND CHILD RESTRAINTS ---------- */
{ cat: "Safe Driving",
  q: "Who must wear a seat belt in Indiana?",
  options: [
    "Only front-seat passengers",
    "The driver and all passengers, at all times when the vehicle is in operation",
    "Only the driver",
    "Only children"
  ],
  answer: 1,
  why: "Indiana law requires a driver and all passengers to use seat belts at all times when a vehicle is in operation. Operators of buses must also use a seat belt.",
  ref: "Ch. 7, p. 56" },
{ cat: "Safe Driving",
  q: "Your car has air bags. Do you still need your seat belt?",
  options: [
    "Only if you are pregnant",
    "Only on the highway",
    "Yes, a seat belt must be used even with air bags; they are designed to work in tandem",
    "No, air bags replace seat belts"
  ],
  answer: 2,
  why: "A seat belt must be used even in a vehicle with air bags. Air bags are designed to work in tandem with seat belts.",
  ref: "Ch. 7, p. 56" },
{ cat: "Safe Driving",
  q: "For drivers and front-seat passengers, worn seat belts increase the chance of survival by how much?",
  options: [
    "5 percent",
    "45 percent, and cut the risk of serious injury by 50 percent",
    "10 percent",
    "90 percent"
  ],
  answer: 1,
  why: "Worn seat belts for drivers and front-seat passengers increase the chance of survival by 45 percent and cut the risk of serious injury by 50 percent.",
  ref: "Ch. 7, p. 56" },
{ cat: "Safe Driving",
  q: "What is the correct seating position for the driver?",
  options: [
    "At least 12 inches from the steering wheel, with head restraints higher than the top of the head and close to the back of the head",
    "With the seat belt tucked behind the back",
    "Reclined as far back as possible",
    "As close to the wheel as possible"
  ],
  answer: 0,
  why: "Everyone should wear belts low on the hips and flat across the collarbone.",
  ref: "Ch. 7, p. 56" },
{ cat: "Safe Driving",
  q: "Children younger than what age must be properly secured in a child restraint system?",
  options: [
    "Six",
    "Four",
    "Twelve",
    "Eight"
  ],
  answer: 3,
  why: "Passengers younger than eight years of age must be properly secured in a child restraint system such as a child car seat or booster seat.",
  ref: "Ch. 7, p. 56" },
{ cat: "Safe Driving",
  q: "If your car has a passenger-side air bag, where does the National Safety Council recommend seating children younger than 12?",
  options: [
    "In the front seat",
    "In the back seat",
    "In the cargo area",
    "On an adult's lap"
  ],
  answer: 1,
  why: "The National Safety Council recommends putting children younger than 12 in the back seat if the car has a passenger-side air bag.",
  ref: "Ch. 7, p. 56" },
/* ---------- PARKING AND REVERSING ---------- */
{ cat: "Safe Driving",
  q: "You park facing downhill on a hill with a curb. Which way do you turn your wheels?",
  options: [
    "Straight ahead",
    "It does not matter",
    "Toward the curb",
    "Away from the curb"
  ],
  answer: 2,
  why: "Facing downhill, turn wheels toward the curb. Facing uphill, turn wheels away from the curb. With no curb, turn wheels away from the street.",
  ref: "Ch. 7, p. 55" },
{ cat: "Safe Driving",
  q: "Which of these is a place where parking is prohibited?",
  options: [
    "In a marked parking space",
    "On any residential street",
    "Within 15 feet of a fire hydrant or in fire lanes",
    "At a parking meter"
  ],
  answer: 2,
  why: "Parking is also prohibited on highways (unless indicated), within intersections, on crosswalks, on sidewalks, in front of driveways, on bridges, elevated structures, or in tunnels, next to yellow curbs, beside another parked vehicle, and in disability spots without a valid placard.",
  ref: "Ch. 7, p. 55" },
{ cat: "Safe Driving",
  q: "Even with a valid disability placard, you may NOT park where?",
  options: [
    "On a city street",
    "In the diagonally striped area next to accessible parking spaces",
    "In any marked accessible space",
    "In a parking garage"
  ],
  answer: 1,
  why: "Parking in the diagonally striped area next to accessible parking spaces is prohibited even with a valid placard.",
  ref: "Ch. 7, p. 55" },
{ cat: "Safe Driving",
  q: "When reversing, what is the correct technique?",
  options: [
    "Use only the backup camera",
    "Back up quickly to spend less time in reverse",
    "Rely only on the rearview mirror",
    "Turn your body to the right and look through the back window; go slowly and watch in all directions"
  ],
  answer: 3,
  why: "To reverse, turn your body to the right to look through the back window and never use only the rearview mirror. Never back into an intersection to turn around.",
  ref: "Ch. 7, p. 55" },
/* ---------- WARNING DEVICES FOR DISABLED VEHICLES ---------- */
{ cat: "Safe Driving",
  q: "Your car is disabled on a divided highway at night when headlights are required. Where do you place warning devices?",
  options: [
    "One device on the roof",
    "One device right behind the car",
    "One device 100 feet behind and one 100 feet in front in the center of the lane, plus one at the traffic side about 10 feet from the car toward approaching traffic",
    "One device 500 feet behind only"
  ],
  answer: 2,
  why: "Place a lighted fuse, lighted red electric lantern, or portable red emergency reflector 100 feet behind and 100 feet in front in the center of the occupied lane, plus one device at the traffic side about 10 feet from the vehicle toward the nearest approaching traffic.",
  ref: "Ch. 7, p. 57" },
{ cat: "Safe Driving",
  q: "In the daytime, what must a driver of a disabled car display?",
  options: [
    "Hazard lights only",
    "A white cloth tied to the antenna",
    "One red flag behind the car",
    "Two red flags: one about 100 feet in front and one about 100 feet behind"
  ],
  answer: 3,
  why: "In the daytime, drivers of disabled cars must display two red flags, one approximately 100 feet in front of the car and one approximately 100 feet behind it.",
  ref: "Ch. 7, p. 57" },
{ cat: "Safe Driving",
  q: "You are stopped within 500 feet of a curve, hilltop, or other obstruction. Where must the warning device go?",
  options: [
    "No device is required",
    "On the dashboard",
    "At least 500 feet from the car",
    "Right behind the bumper"
  ],
  answer: 2,
  why: "If stopped within 500 feet of a curve, hilltop, or other obstruction, a warning device must be displayed at least 500 feet from the car.",
  ref: "Ch. 7, p. 57" },
{ cat: "Safe Driving",
  q: "A disabled truck, bus, or tractor-trailer must display which warning devices?",
  options: [
    "Three bidirectional emergency reflective triangles, at least six fuses, or three liquid-burning flares",
    "Two red flags",
    "A flashlight on the dashboard",
    "One reflective triangle"
  ],
  answer: 0,
  why: "On a divided highway, the device placed toward approaching traffic must be 200 feet from the vehicle.",
  ref: "Ch. 7, p. 57" }
]);
