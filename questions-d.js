/* Indiana Permit Quest: question bank, part 5 (permits, licensing, sharing the road)
 * Appended to QUESTIONS from questions.js. Format matches the original bank. */
QUESTIONS = QUESTIONS.concat([
/* ---------- GETTING LICENSED ---------- */
{ cat: "Teens & Permits",
  q: "With driver education completed, what is the minimum age and permit time for an Indiana operator's license?",
  options: [
    "16 years old, with no permit time needed",
    "15 years old with 180 days of permit time",
    "16 years and 90 days old, holding a learner's permit for at least 180 days",
    "18 years old"
  ],
  answer: 2,
  why: "You must be at least 16 years and 90 days old with driver education (or 16 years and 270 days without it), plus hold a valid learner's permit for at least 180 days.",
  ref: "Ch. 1, p. 8" },
{ cat: "Teens & Permits",
  q: "Without completing driver education, how old must you be to get an operator's license?",
  options: [
    "16 years and 90 days",
    "18 years even",
    "17 years even",
    "16 years and 270 days, plus 180 days of permit time"
  ],
  answer: 3,
  why: "Without driver education, you must be at least 16 years and 270 days old and have held a valid learner's permit for at least 180 days.",
  ref: "Ch. 1, p. 8" },
{ cat: "Teens & Permits",
  q: "You are 18 or older and applying for a license. How much supervised driving practice is required?",
  options: [
    "No practice is required at 18",
    "10 hours total",
    "At least 50 hours, including 10 hours at night, with a licensed driver 25 or older or a spouse 21 or older, logged on State Form 54706",
    "100 hours, all during the day"
  ],
  answer: 2,
  why: "Drivers 18 and older must complete at least 50 hours of supervised driving practice (at least 10 at night), logged on State Form 54706.",
  ref: "Ch. 1, p. 8" },
{ cat: "Teens & Permits",
  q: "How long is an Indiana operator's license valid if you are younger than 75?",
  options: [
    "Ten years",
    "Six years",
    "Four years",
    "Two years"
  ],
  answer: 1,
  why: "An operator's license is valid for six years if you are younger than 75, three years if 75 through 84, and two years if 85 or older.",
  ref: "Ch. 1, p. 8" },
{ cat: "Teens & Permits",
  q: "You fail the driving skills exam. How long before you can retake it?",
  options: [
    "Six months",
    "30 days",
    "The next day",
    "14 days; after a third failure on a learner's permit, you must wait two months from the last failed exam"
  ],
  answer: 3,
  why: "If you fail a driving skills exam, you must wait 14 days to retake it. After a third failure while holding a learner's permit, you must wait two months.",
  ref: "Ch. 1, p. 8" },
{ cat: "Teens & Permits",
  q: "At what age may you apply for an Indiana learner's permit?",
  options: [
    "18 years old",
    "14 years old",
    "16 or older, or 15 or older if enrolled in a BMV-licensed behind-the-wheel training provider",
    "15 years old, always"
  ],
  answer: 2,
  why: "You may apply for a learner's permit at 16 or older, or at 15 or older if enrolled in a BMV-licensed behind-the-wheel training provider.",
  ref: "Ch. 1, p. 3" },
{ cat: "Teens & Permits",
  q: "How long is a learner's permit valid?",
  options: [
    "Six months",
    "One year",
    "Two years from issuance",
    "Until you turn 21"
  ],
  answer: 2,
  why: "Learner's permits are valid for two years from issuance. If more than 180 days have passed since your last passed knowledge exam, you must retest to renew.",
  ref: "Ch. 1, p. 3" },
{ cat: "Teens & Permits",
  q: "You are 17 with a learner's permit. Who may supervise your practice driving?",
  options: [
    "A licensed driver age 25 or older who is related by blood, marriage, or legal status and seated in front, or your licensed spouse age 21 or older",
    "No supervision is needed at 17",
    "Anyone who owns a car",
    "Any licensed friend"
  ],
  answer: 0,
  why: "Under 18, practice only with a licensed driver 25 or older (valid privileges, related by blood, marriage, or legal status, seated in front) or a licensed spouse 21 or older.",
  ref: "Ch. 1, p. 3" },
/* ---------- SHARING THE ROAD (NEW CATEGORY) ---------- */
/* ----- Move Over law ----- */
{ cat: "Sharing the Road",
  q: "You approach an emergency vehicle with flashing lights on the shoulder. What does Indiana's Move Over law require?",
  options: [
    "Yield the right of way, move over to the right and come to a complete stop, or change lanes away from the emergency vehicle",
    "Honk to warn the workers",
    "Slow down slightly and keep your lane",
    "Speed past quickly to clear the area"
  ],
  answer: 0,
  why: "Approaching an emergency vehicle with its lights flashing, you must yield the right of way, move over to the right and come to a complete stop, or change lanes away from the emergency vehicle.",
  ref: "Ch. 7, p. 53" },
{ cat: "Sharing the Road",
  q: "An emergency vehicle displays flashing red and blue lights. You cannot safely change lanes. What must you do?",
  options: [
    "Reduce speed to 10 mph under the posted limit and proceed with caution",
    "Maintain your speed",
    "Turn on your hazard lights and keep going",
    "Stop in your lane"
  ],
  answer: 0,
  why: "If you cannot move over, reduce speed to 10 mph under the posted limit and proceed with caution. Failure to comply is a Class A Infraction.",
  ref: "Ch. 7, p. 54" },
{ cat: "Sharing the Road",
  q: "You approach a parked tow truck with amber flashing lights and cannot move over. What is required, and what happens if you fail?",
  options: [
    "Stop completely until it leaves",
    "Reduce speed to 10 mph under the posted limit and proceed with caution; failure is a Class B Infraction",
    "Speed up to get past quickly",
    "Nothing is required for amber lights"
  ],
  answer: 1,
  why: "Approaching an authorized parked vehicle with amber flashing lights (tow trucks, highway maintenance, utility, solid waste, survey, or construction vehicles): change lanes away, or reduce to 10 mph under the posted limit with caution.",
  ref: "Ch. 7, p. 54" },
{ cat: "Sharing the Road",
  q: "On a highway with two or more lanes in your direction, you see a stationary utility truck with alternating flashing amber lights. What must you do?",
  options: [
    "Nothing; it is not an emergency vehicle",
    "Move into the lane right next to it",
    "Stop completely",
    "Slow down and move into a non-adjacent lane if safe; if changing lanes is not safe, slow to 10 mph below the posted limit and proceed with caution"
  ],
  answer: 3,
  why: "With at least four lanes (two or more in your direction), slow down and move into a non-adjacent lane if safe; otherwise slow to 10 mph below the posted limit.",
  ref: "Ch. 7, p. 54" },
/* ----- School buses ----- */
{ cat: "Sharing the Road",
  q: "A school bus ahead is flashing its amber lights. What does that mean?",
  options: [
    "The bus is slowing and will load or unload children",
    "The bus is broken down",
    "You may pass it quickly",
    "The bus is turning"
  ],
  answer: 0,
  why: "Amber flashing lights warn that the bus is slowing and will load or unload children. Once stopped, the red lights and stop arm activate.",
  ref: "Ch. 7, p. 54" },
{ cat: "Sharing the Road",
  q: "You approach a stopped school bus with flashing red lights and the stop arm extended on an undivided road. What must you do?",
  options: [
    "Honk and drive around it",
    "Stop only if children are visible",
    "Stop",
    "Slow down and pass carefully"
  ],
  answer: 2,
  why: "You must stop when approaching a school bus with flashing red lights and the stop arm extended. On a roadway divided by a barrier or unimproved median, you must stop only if traveling in the same direction as the bus.",
  ref: "Ch. 7, p. 54" },
{ cat: "Sharing the Road",
  q: "What is the penalty for disregarding a school bus stop arm if the offense results in bodily injury?",
  options: [
    "A Class A misdemeanor normally, but a Level 6 felony if it results in bodily injury",
    "Two points on your record",
    "A warning",
    "A small fine only"
  ],
  answer: 0,
  why: "Disregarding a school bus stop arm can result in a Class A misdemeanor, a Level 6 felony if it results in bodily injury, or a Level 5 felony if it results in death.",
  ref: "Ch. 7, p. 54" },
/* ----- Motorcycles and bicycles ----- */
{ cat: "Sharing the Road",
  q: "How much space must you give a motorcyclist?",
  options: [
    "Six inches",
    "The width of a full lane",
    "No special space is needed",
    "Half a lane"
  ],
  answer: 1,
  why: "Motorcyclists must be given the width of a full lane. Allow at least three to four seconds when following a motorcycle.",
  ref: "Ch. 7, p. 55" },
{ cat: "Sharing the Road",
  q: "The motorcycle ahead has had its turn signal flashing for a mile. What should you assume?",
  options: [
    "A turn is coming very soon",
    "The rider is signaling you to pass",
    "Do not assume a turn is coming; motorcycle signals are usually not self-canceling and riders sometimes forget to turn them off",
    "The motorcycle is broken"
  ],
  answer: 2,
  why: "Do not assume a flashing turn signal on a motorcycle means a turn is coming soon.",
  ref: "Ch. 7, p. 55" },
{ cat: "Sharing the Road",
  q: "When passing a bicyclist, how much room must you leave?",
  options: [
    "One foot",
    "A few inches",
    "A safe amount of room, minimum three feet, with no danger from oncoming traffic",
    "Half the lane"
  ],
  answer: 2,
  why: "When passing a bicyclist, leave a safe amount of room beside the bicyclist (minimum three feet) with no danger from oncoming traffic.",
  ref: "Ch. 7, p. 55" },
{ cat: "Sharing the Road",
  q: "How many bicyclists may ride side by side on a regular road?",
  options: [
    "As many as want to",
    "No more than two abreast",
    "Only one; always single file",
    "Four"
  ],
  answer: 1,
  why: "Bicyclists may ride no more than two abreast except on paths or roadways set aside for exclusive bicycle use. A bicyclist is not required to ride in a designated bike lane.",
  ref: "Ch. 7, p. 55" },
{ cat: "Sharing the Road",
  q: "May you drive or park in a bicycle lane?",
  options: [
    "Yes, briefly",
    "Only at night",
    "No; yield the right of way to bicyclists on paths and lanes, and cross them only when turning or entering or leaving an alley, driveway, or private road",
    "Yes, if no bicyclists are present"
  ],
  answer: 2,
  why: "Do not drive or park in bicycle paths or lanes.",
  ref: "Ch. 7, p. 55" },
{ cat: "Sharing the Road",
  q: "After parking on a street, what should you do before opening your vehicle door?",
  options: [
    "Check for bicyclists",
    "Open it quickly",
    "Turn off the engine twice",
    "Honk first"
  ],
  answer: 0,
  why: "After parking and before opening vehicle doors, check for bicyclists.",
  ref: "Ch. 7, p. 55" },
{ cat: "Sharing the Road",
  q: "A rider on horseback is using a public highway. What rights does the rider have?",
  options: [
    "The rider has the right of way over all vehicles",
    "The same rights and responsibilities as a motor vehicle driver",
    "No rights; horses are not allowed on highways",
    "The rider must ride on the shoulder only"
  ],
  answer: 1,
  why: "A rider of a horse or horse-drawn vehicle has the same rights and responsibilities as a motor vehicle driver on a public highway.",
  ref: "Ch. 7, p. 55" },
{ cat: "Sharing the Road",
  q: "You see sharrow markings (a bike symbol with two arrows above it) in your lane. What do they mean?",
  options: [
    "It is a bike-only lane",
    "They help bicyclists position themselves away from parked cars and alert you that bicyclists may occupy the travel lane",
    "Pass bicycles on the right here",
    "Bicycles are prohibited here"
  ],
  answer: 1,
  why: "Sharrow markings help bicyclists position themselves away from parked cars and alert others that bicyclists may occupy travel lanes.",
  ref: "Ch. 7, p. 55" },
/* ----- Pedestrians ----- */
{ cat: "Sharing the Road",
  q: "A pedestrian is crossing and your turn would force them to stop or swerve. What must you do?",
  options: [
    "Turn quickly before they reach you",
    "Always yield the right of way; do not make a turn that causes a pedestrian to stop, slow down, or take special effort to avoid a collision",
    "Wave them through, then turn anyway",
    "Honk to warn them"
  ],
  answer: 1,
  why: "Always yield the right of way to pedestrians.",
  ref: "Ch. 7, p. 56" },
{ cat: "Sharing the Road",
  q: "How can you identify a visually impaired person you must always yield to?",
  options: [
    "By their reflective vest",
    "By a white cane or trained guide dog",
    "By a bright hat",
    "By their slow walking speed"
  ],
  answer: 1,
  why: "Drivers must always yield the right of way to visually impaired persons, identified by a white cane or trained guide dog.",
  ref: "Ch. 7, p. 56" },
/* ----- Tractor-trailers ----- */
{ cat: "Sharing the Road",
  q: "Where are a tractor-trailer's blind spots?",
  options: [
    "Only directly behind the trailer",
    "Only on the right side",
    "Up to 20 feet in front of the cab, on either side of the trailer, alongside the cab, and up to 200 feet behind",
    "Trucks have no blind spots"
  ],
  answer: 2,
  why: "Tractor-trailer blind spots include up to 20 feet in front of the cab, either side of the trailer, alongside the cab, and up to 200 feet behind the vehicle.",
  ref: "Ch. 7, p. 53" },
{ cat: "Sharing the Road",
  q: "You are following a tractor-trailer and cannot see the driver's rearview mirrors. What does that mean?",
  options: [
    "The mirrors are broken",
    "You are following too closely to be safe, but you are visible",
    "The truck is parked",
    "The driver cannot see you"
  ],
  answer: 3,
  why: "When following a tractor-trailer, if you cannot see the driver's rearview mirrors, the driver cannot see you.",
  ref: "Ch. 7, p. 53" },
{ cat: "Sharing the Road",
  q: "What is the correct way to pass a tractor-trailer?",
  options: [
    "Closely behind it, then swerve out",
    "Completely and always on the left side; do not linger alongside",
    "On either side, whichever is open",
    "On the right, quickly"
  ],
  answer: 1,
  why: "Always pass a tractor-trailer completely and always on the left side. Do not linger alongside.",
  ref: "Ch. 7, p. 53" },
{ cat: "Sharing the Road",
  q: "Your exit is coming up and a tractor-trailer is right beside you. What should you NOT do?",
  options: [
    "Cut off the tractor-trailer to reach your exit",
    "Stay in your lane",
    "Slow down and let it pass",
    "Take the next exit instead"
  ],
  answer: 0,
  why: "Do not cut off a tractor-trailer to reach an exit or turn.",
  ref: "Ch. 7, p. 53" },
{ cat: "Sharing the Road",
  q: "Without a special permit, what are the maximum width and height of a vehicle?",
  options: [
    "10 feet wide and 14 feet high",
    "8 feet 6 inches wide and 13 feet 6 inches high",
    "There are no limits",
    "8 feet wide and 12 feet high"
  ],
  answer: 1,
  why: "The maximum width without a special permit is 8 feet and 6 inches; the maximum height is 13 feet, 6 inches.",
  ref: "Ch. 7, p. 53" },
/* ----- Railroad crossings ----- */
{ cat: "Sharing the Road",
  q: "Which vehicles must always stop at railroad crossings, no closer than 15 feet and no farther than 50 feet from the nearest rail?",
  options: [
    "No vehicles are required to stop",
    "Only large trucks",
    "All vehicles carrying passengers for hire, all school buses, and all vehicles carrying explosives or flammable liquids",
    "Only school buses"
  ],
  answer: 2,
  why: "This does not apply to abandoned tracks.",
  ref: "Ch. 7, p. 51" },
{ cat: "Sharing the Road",
  q: "Warning bells are ringing and the crossing lights are flashing. What must you do?",
  options: [
    "Stop only if you see the train",
    "Speed up to beat the gate",
    "Stop and do not proceed until the warning is canceled or you are directed to proceed by a law enforcement officer or railroad flagman",
    "Drive around the gate on the shoulder"
  ],
  answer: 2,
  why: "When active warning bells, flashing lights, or lights and gates are present, you must stop.",
  ref: "Ch. 7, p. 51" },
{ cat: "Sharing the Road",
  q: "The crossing gate is down but no train is visible yet. May you drive around it?",
  options: [
    "Yes, if other cars are doing it",
    "Yes, if you are in a hurry",
    "No, it is illegal; never attempt to race a train to a crossing",
    "Yes, but only during the day"
  ],
  answer: 2,
  why: "It is illegal to drive around a crossing gate that is down. Never attempt to race a train to a crossing.",
  ref: "Ch. 7, p. 51" },
{ cat: "Sharing the Road",
  q: "When may you begin to cross railroad tracks?",
  options: [
    "Whenever the lights stop flashing",
    "Only at night",
    "After honking twice",
    "Only when the tracks can be cleared without stopping; avoid stopping or shifting gears while crossing"
  ],
  answer: 3,
  why: "Never begin to cross unless the tracks can be cleared without stopping. If your vehicle stalls on the tracks, all occupants should immediately leave the vehicle.",
  ref: "Ch. 7, p. 51" },
{ cat: "Sharing the Road",
  q: "Once the crossing lights begin to flash and the gate begins to lower, about how long do you have to escape from the crossing?",
  options: [
    "Approximately 20 seconds",
    "5 seconds",
    "One minute",
    "Two minutes"
  ],
  answer: 0,
  why: "Once the crossing lights begin to flash and the gate begins to lower, you have approximately 20 seconds to escape from the crossing.",
  ref: "Ch. 7, p. 52" },
{ cat: "Sharing the Road",
  q: "Your car is stuck on railroad tracks and a train is approaching. What should you do?",
  options: [
    "Stay inside and brace for impact",
    "Keep trying to restart the car for two minutes",
    "Run straight down the tracks away from the train",
    "Evacuate the area, tell others to do the same, and run at a 45-degree angle away from the tracks in the direction of the oncoming train, then call 911"
  ],
  answer: 3,
  why: "Running at a 45-degree angle away from the tracks in the direction of the oncoming train keeps you clear of flying debris.",
  ref: "Ch. 7, p. 52" },
{ cat: "Sharing the Road",
  q: "Your vehicle is disabled on a crossing but no train is approaching. Who do you call first?",
  options: [
    "911",
    "Your insurance company",
    "A tow truck directly",
    "The Emergency Notification System (ENS); the phone number is on the blue sign attached to the crossing gate, then 911"
  ],
  answer: 3,
  why: "First call the ENS (the number is on the blue sign attached to the crossing gate), then call 911.",
  ref: "Ch. 7, p. 52" },
{ cat: "Sharing the Road",
  q: "How close to a railroad crossing may you pass another vehicle?",
  options: [
    "There is no rule about this",
    "Within 200 feet is fine",
    "Within 50 feet is fine",
    "Do not pass another vehicle within 100 feet of a railroad crossing"
  ],
  answer: 3,
  why: "Do not pass another vehicle within 100 feet of a railroad crossing.",
  ref: "Ch. 7, p. 52" }
]);
