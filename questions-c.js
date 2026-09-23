/* Indiana Permit Quest: question bank, part 4 (emergencies, points, penalties)
 * Appended to QUESTIONS from questions.js. Format matches the original bank. */
QUESTIONS = QUESTIONS.concat([
/* ---------- AFTER AN ACCIDENT ---------- */
{ cat: "Emergencies",
  q: "Among all collisions in Indiana, what is the most common factor?",
  options: [
    "Bad weather",
    "Drunk driving",
    "Failure to yield the right of way",
    "Tire blowouts"
  ],
  answer: 2,
  why: "Among all collisions in Indiana, failure to yield the right of way is the most common factor.",
  ref: "Ch. 8, p. 58" },
{ cat: "Emergencies",
  q: "You are in an accident on the traveled part of a highway. What should you do with your vehicle?",
  options: [
    "Leave it exactly where it stopped",
    "Move it off the highway as close to the accident as possible, but do not move it if it involves hazardous materials, injury, death, or entrapment",
    "Push it into the ditch",
    "Drive home and report it later"
  ],
  answer: 1,
  why: "A driver involved in an accident must stop immediately or as close as possible to the scene without obstructing traffic more than necessary.",
  ref: "Ch. 8, p. 58" },
{ cat: "Emergencies",
  q: "After an accident, what information must you give to everyone involved?",
  options: [
    "Only your first name",
    "Your name, address, and the vehicle's registration number, and show your driver's license",
    "Your insurance rates",
    "Nothing until police arrive"
  ],
  answer: 1,
  why: "The driver must remain at the scene, giving name, address, and the motor vehicle's registration number to everyone involved, and showing his or her driver's license.",
  ref: "Ch. 8, p. 58" },
{ cat: "Emergencies",
  q: "The accident you were in caused an injury. What must you do?",
  options: [
    "Leave to avoid blocking traffic",
    "Provide reasonable assistance to those injured or trapped as directed by law enforcement, medical personnel, or a 911 operator, and notify law enforcement as soon as possible",
    "Move the injured person into your car",
    "Wait for the other driver to call for help"
  ],
  answer: 1,
  why: "If the accident results in injury or death, the driver must provide reasonable assistance as directed and must notify law enforcement (local police, sheriff, or state police) as soon as possible.",
  ref: "Ch. 8, p. 58" },
{ cat: "Emergencies",
  q: "You hit an unattended parked car and cannot find its owner. What should you do?",
  options: [
    "Stop, remain at the scene, take reasonable steps to notify the owner, and if the owner cannot be located, call a law enforcement agency",
    "Wait exactly 10 minutes, then leave",
    "Drive away; no one saw it happen",
    "Leave a note on the windshield and drive away"
  ],
  answer: 0,
  why: "If the collision was with an unattended vehicle or other property: stop and remain at the scene, take reasonable steps to notify the owner, and if the owner cannot be located, call a law enforcement agency.",
  ref: "Ch. 8, p. 59" },
{ cat: "Emergencies",
  q: "After an accident, the BMV asks you for proof of financial responsibility. What must happen?",
  options: [
    "You show your license plate to the BMV",
    "You mail in a paper form",
    "Nothing is required",
    "Your insurance provider must electronically file a Certificate of Compliance with the BMV"
  ],
  answer: 3,
  why: "After an accident, upon request from the BMV, you must provide proof of financial responsibility: your insurance provider must electronically file a Certificate of Compliance.",
  ref: "Ch. 8, p. 59" },
/* ---------- VEHICLE IN WATER ---------- */
{ cat: "Emergencies",
  q: "Your vehicle plunges into water. Why should you NOT try to open a door?",
  options: [
    "It voids your insurance",
    "The doors lock automatically",
    "The windows will shatter",
    "The weight of the water makes the door nearly impossible to open, and water will flood in through an open door"
  ],
  answer: 3,
  why: "A vehicle that plunges into water will usually float several minutes before sinking, allowing escape through an open window while still on the surface.",
  ref: "Ch. 8, p. 60" },
{ cat: "Emergencies",
  q: "After escaping a vehicle in water, what should you do?",
  options: [
    "Swim for shore immediately",
    "Move to the roof (you can ride it like a boat briefly), call 911, and swim for shore only as a last resort; never reenter for possessions",
    "Climb back in to get your phone",
    "Wait inside the car for rescue"
  ],
  answer: 1,
  why: "Remove your seat belt, open a window, get children out and move passengers to the front seats, exit the vehicle, and move to the roof.",
  ref: "Ch. 8, p. 60" },
/* ---------- ROADSIDE EMERGENCIES ---------- */
{ cat: "Emergencies",
  q: "You have a roadside emergency on a hill or curve. Where do you place your reflective triangle?",
  options: [
    "200 feet behind the vehicle",
    "In front of the vehicle",
    "Right at the bumper",
    "500 feet behind the vehicle"
  ],
  answer: 3,
  why: "Place the red emergency reflective triangle 200 feet behind the vehicle, or 500 feet behind if on a hill or curve. If you must exit on a shoulder, exit on the passenger side after checking for traffic.",
  ref: "Ch. 8, p. 60" },
/* ---------- THEFT PREVENTION ---------- */
{ cat: "Emergencies",
  q: "Which of these reduces your risk of vehicle theft?",
  options: [
    "Hiding a spare key inside the car",
    "Leaving the engine running while you run inside",
    "Removing the keys, locking the doors, and parking in well-lit, well-patrolled areas",
    "Parking with the wheels turned left"
  ],
  answer: 2,
  why: "Also: do not hide a second set of keys in or around the vehicle, park with front wheels turned sharply to the right with the emergency brake applied, and never leave a vehicle unattended with the engine running.",
  ref: "Ch. 8, p. 61" },
/* ---------- TRAFFIC STOPS ---------- */
{ cat: "Emergencies",
  q: "You see police lights behind you. How do you acknowledge the officer?",
  options: [
    "Flash your high beams",
    "Turn on your right turn signal",
    "Speed up to the next exit",
    "Stop in the middle of the lane"
  ],
  answer: 1,
  why: "Failing to acknowledge may make an officer think you are avoiding yielding or are impaired.",
  ref: "Ch. 8, p. 61" },
{ cat: "Emergencies",
  q: "Where should you pull over for a traffic stop?",
  options: [
    "Anywhere, immediately",
    "Onto the center median",
    "In the left lane",
    "Move to the right shoulder; do not stop in a freeway's center median or on the opposite side of a two-lane road"
  ],
  answer: 3,
  why: "If there is no usable shoulder, find the next safest location.",
  ref: "Ch. 8, p. 61" },
{ cat: "Emergencies",
  q: "You are pulled over at night. What should you do after stopping?",
  options: [
    "Stay in the dark so the officer cannot see you",
    "Turn off all lights",
    "Get out and walk to the patrol car",
    "Stop in a well-lit area if possible, pull as far off the roadway as possible, and turn on the interior light"
  ],
  answer: 3,
  why: "Stop in a well-lit area when possible and pull as far off the roadway as possible. At night, turn on the vehicle's interior light.",
  ref: "Ch. 8, p. 62" },
{ cat: "Emergencies",
  q: "You cannot find a safe place to pull over right away. What should you do?",
  options: [
    "Ignore the lights until you feel like stopping",
    "Slow down and turn on your hazard lights to show you acknowledge the officer and are looking for a safe place",
    "Stop in your lane",
    "Keep driving at normal speed"
  ],
  answer: 1,
  why: "Slow down and turn on hazard lights to show you acknowledge the officer and are looking for a safe place.",
  ref: "Ch. 8, p. 62" },
{ cat: "Emergencies",
  q: "During a traffic stop, where should your hands be?",
  options: [
    "In your pockets",
    "On your phone",
    "On the steering wheel, with passengers' hands visible on their laps",
    "Behind your head"
  ],
  answer: 2,
  why: "Keep your hands on the steering wheel and keep passengers' hands visible on their laps so the officer can see everyone's hands.",
  ref: "Ch. 8, p. 62" },
{ cat: "Emergencies",
  q: "Your windows are tinted and an officer pulls you over. What should you do?",
  options: [
    "Lock the doors",
    "Keep the windows up for privacy",
    "Roll all windows down after stopping and before the officer makes contact",
    "Open only the driver's window halfway"
  ],
  answer: 2,
  why: "If windows are tinted, roll them all down after stopping and before the officer makes contact.",
  ref: "Ch. 8, p. 62" },
{ cat: "Emergencies",
  q: "The officer asks for your registration, which is in the glove box. What should you do?",
  options: [
    "First inform the officer where the documents are before reaching to retrieve them",
    "Hand over your phone instead",
    "Refuse to provide it",
    "Reach for it quickly"
  ],
  answer: 0,
  why: "If documents are in the glove box, under the seat, or on a cell phone, first inform the officer before reaching to retrieve them.",
  ref: "Ch. 8, p. 62" },
{ cat: "Emergencies",
  q: "You receive a ticket and the officer asks you to sign it. What does your signature mean?",
  options: [
    "Only an acknowledgment that you received the ticket",
    "An admission of guilt",
    "An agreement to pay on the spot",
    "Nothing at all"
  ],
  answer: 0,
  why: "Do not debate or argue with the officer, do not refuse to sign, do not be uncooperative, and do not resist arrest.",
  ref: "Ch. 8, p. 62" },
{ cat: "Emergencies",
  q: "If you are suspected of drunk driving and refuse breath, urine, blood, or performance tests, what can happen?",
  options: [
    "The officer must let you go",
    "You get a warning only",
    "You can lose your driving privileges",
    "Nothing; it is your right"
  ],
  answer: 2,
  why: "Refusal to submit to breath, urine, blood, or performance tests when suspected of drunk driving can result in the loss of driving privileges.",
  ref: "Ch. 8, p. 62" },
{ cat: "Emergencies",
  q: "During a traffic stop, you may ask the officer for what?",
  options: [
    "Directions to the nearest restaurant",
    "The officer's name and badge number",
    "The officer's personal phone number",
    "A warning instead of a ticket"
  ],
  answer: 1,
  why: "Officers must provide their names and badge numbers upon request. Complaints can be filed with the agency's internal affairs division or civilian complaint board.",
  ref: "Ch. 8, p. 62" },
/* ---------- CARBON MONOXIDE ---------- */
{ cat: "Emergencies",
  q: "Which of these are symptoms of carbon monoxide poisoning?",
  options: [
    "Loud ringing in the ears only",
    "A sweet taste in the mouth",
    "Drowsiness or dizziness, a bluish tinge to skin or lips, headache, and increased sensitivity to light",
    "Excessive energy"
  ],
  answer: 2,
  why: "You cannot see, smell, or taste carbon monoxide. It is most likely to leak into a vehicle when the heater is running, the exhaust system is not working properly, or in heavy traffic.",
  ref: "Ch. 8, p. 62" },
{ cat: "Emergencies",
  q: "How can you prevent carbon monoxide from leaking into your vehicle?",
  options: [
    "Drive with the windows sealed shut",
    "Idle in traffic with the fresh-air vent wide open",
    "Have the exhaust system checked regularly, watch for unusual roars from under the car, and never let the engine run in a closed garage",
    "Run the heater on full blast"
  ],
  answer: 2,
  why: "In congested traffic close the fresh-air vent; on highways in cold weather open the fresh-air vent.",
  ref: "Ch. 8, p. 62" },
/* ---------- POINT VALUES ---------- */
{ cat: "Rules & Penalties",
  q: "How many points is speeding 20 mph over the limit worth?",
  options: [
    "8 points",
    "2 points",
    "6 points",
    "4 points"
  ],
  answer: 3,
  why: "Speeding 16 to 25 mph over the limit is worth 4 points. Speeding 1 to 15 over is 2 points, and 26 or more over is 6 points.",
  ref: "Ch. 5, p. 21" },
{ cat: "Rules & Penalties",
  q: "How many points is speeding 30 mph over the limit worth?",
  options: [
    "4 points",
    "8 points",
    "2 points",
    "6 points"
  ],
  answer: 3,
  why: "Speeding 26 or more mph over the limit is worth 6 points.",
  ref: "Ch. 5, p. 21" },
{ cat: "Rules & Penalties",
  q: "You are convicted of failing to use your headlights. How many points go on your record?",
  options: [
    "2 points",
    "6 points",
    "4 points",
    "8 points"
  ],
  answer: 0,
  why: "Failure to use headlights is worth 2 points, as is having no brake or signal lights.",
  ref: "Ch. 5, p. 21" },
{ cat: "Rules & Penalties",
  q: "Your car has no working brake lights or turn signals. How many points is that worth?",
  options: [
    "2 points",
    "8 points",
    "4 points",
    "6 points"
  ],
  answer: 0,
  why: "No brake or signal lights is worth 2 points.",
  ref: "Ch. 5, p. 21" },
{ cat: "Rules & Penalties",
  q: "Improper motorcycle headgear or carrying a motorcycle passenger improperly is worth how many points?",
  options: [
    "8 points",
    "6 points",
    "2 points",
    "4 points"
  ],
  answer: 3,
  why: "Improper motorcycle headgear and improper motorcycle passenger are each worth 4 points.",
  ref: "Ch. 5, p. 21" },
{ cat: "Rules & Penalties",
  q: "How many points is an improper U-turn worth?",
  options: [
    "8 points",
    "2 points",
    "4 points",
    "6 points"
  ],
  answer: 2,
  why: "An improper U-turn is worth 4 points, as are unsafe lane movement and disregarding a stop or yield sign.",
  ref: "Ch. 5, p. 21" },
{ cat: "Rules & Penalties",
  q: "Unsafe lane movement is worth how many points?",
  options: [
    "2 points",
    "4 points",
    "6 points",
    "8 points"
  ],
  answer: 1,
  why: "Unsafe lane movement is worth 4 points.",
  ref: "Ch. 5, p. 21" },
{ cat: "Rules & Penalties",
  q: "Disregarding a stop sign or yield sign is worth how many points?",
  options: [
    "2 points",
    "8 points",
    "6 points",
    "4 points"
  ],
  answer: 3,
  why: "Disregarding a stop sign or yield sign is worth 4 points.",
  ref: "Ch. 5, p. 21" },
{ cat: "Rules & Penalties",
  q: "Failure to yield to an emergency vehicle is worth how many points?",
  options: [
    "4 points",
    "6 points",
    "8 points",
    "2 points"
  ],
  answer: 1,
  why: "Failure to yield to an emergency vehicle is worth 6 points, as is following another vehicle too closely.",
  ref: "Ch. 5, p. 21" },
{ cat: "Rules & Penalties",
  q: "How many points is a speed contest on the road worth?",
  options: [
    "8 points",
    "4 points",
    "2 points",
    "6 points"
  ],
  answer: 0,
  why: "A speed contest on the road is worth 8 points, the same as driving while suspended.",
  ref: "Ch. 5, p. 21" },
/* ---------- OWI AND CHEMICAL TESTS ---------- */
{ cat: "Rules & Penalties",
  q: "What is Indiana's legal limit for blood alcohol concentration?",
  options: [
    ".05",
    ".08",
    ".10",
    ".02"
  ],
  answer: 1,
  why: "The legal limit for blood alcohol concentration (BAC) is .08.",
  ref: "Ch. 5, p. 23" },
{ cat: "Rules & Penalties",
  q: "You fail a chemical test for intoxication. How long is the suspension of your driving privileges?",
  options: [
    "Two years",
    "180 days",
    "One year",
    "90 days"
  ],
  answer: 1,
  why: "A motorist who fails a chemical test faces a 180-day suspension. Refusing the test brings a one-year suspension.",
  ref: "Ch. 5, p. 23" },
{ cat: "Rules & Penalties",
  q: "You refuse to submit to a chemical test. How long is the suspension of your driving privileges?",
  options: [
    "90 days",
    "180 days",
    "One year",
    "Two years"
  ],
  answer: 2,
  why: "A motorist who refuses a chemical test faces a one-year suspension. With a previous OWI conviction, refusing brings a two-year suspension.",
  ref: "Ch. 5, p. 23" },
/* ---------- DRIVER SAFETY PROGRAM ---------- */
{ cat: "Rules & Penalties",
  q: "You are 21 or older and have been convicted of two traffic offenses within 12 months. What may the BMV require?",
  options: [
    "Completion of a BMV-approved Driver Safety Program course",
    "A new vision test only",
    "Nothing; points expire on their own",
    "Thirty days of community service"
  ],
  answer: 0,
  why: "The BMV may require drivers 21 and older convicted of two or more traffic offenses within a 12-month period to complete a DSP course.",
  ref: "Ch. 5, p. 22" },
{ cat: "Rules & Penalties",
  q: "The BMV requires you to complete a Driver Safety Program course and mails you notice. What happens if you do not finish within 90 days?",
  options: [
    "You get an extension automatically",
    "You pay a small late fee",
    "Nothing happens",
    "Your driving privileges are suspended"
  ],
  answer: 3,
  why: "Failure to complete a required DSP course within 90 days of the BMV's mailed notice results in suspension of driving privileges.",
  ref: "Ch. 5, p. 22" },
{ cat: "Rules & Penalties",
  q: "What is the maximum fee for a BMV-approved Driver Safety Program course?",
  options: [
    "$25",
    "$100",
    "$200",
    "$55"
  ],
  answer: 3,
  why: "The maximum fee for any BMV-approved DSP is $55, and completion results take 7 to 10 business days to process.",
  ref: "Ch. 5, p. 22" },
/* ---------- INSURANCE ---------- */
{ cat: "Rules & Penalties",
  q: "The BMV mails you a request to verify your insurance. How long does your insurer have to file the Certificate of Compliance electronically?",
  options: [
    "60 days",
    "Within 90 days, or your driving privileges will be suspended",
    "One year",
    "30 days"
  ],
  answer: 1,
  why: "A Certificate of Compliance must be received electronically and processed by the BMV within 90 days of the mailing, or driving privileges will be suspended.",
  ref: "Ch. 5, p. 22" },
{ cat: "Rules & Penalties",
  q: "After a first no-insurance suspension, how long must an SR22 stay on file with the BMV?",
  options: [
    "One year",
    "Five years",
    "Three years",
    "Ten years"
  ],
  answer: 2,
  why: "An SR22 must be maintained for three years after a first or second no-insurance suspension, or five years after a third and subsequent suspension.",
  ref: "Ch. 5, p. 23" },
{ cat: "Rules & Penalties",
  q: "What is the reinstatement fee for a third no-insurance suspension?",
  options: [
    "$1,000",
    "$500",
    "$100",
    "$250"
  ],
  answer: 0,
  why: "No-insurance reinstatement fees are $250 for a first suspension, $500 for a second, and $1,000 for a third and subsequent suspension.",
  ref: "Ch. 5, p. 23" },
/* ---------- OTHER SUSPENSIONS ---------- */
{ cat: "Rules & Penalties",
  q: "You fail to appear in court for a citation and never pay the ticket after judgment. What can happen to your license?",
  options: [
    "It can be suspended indefinitely, ending only when the court notifies the BMV",
    "You get two points",
    "It is suspended for 30 days",
    "Nothing until your next renewal"
  ],
  answer: 0,
  why: "Failing to appear in court or not paying tickets after judgment can lead to indefinite suspension, ending only when the court notifies the BMV.",
  ref: "Ch. 5, p. 24" },
{ cat: "Rules & Penalties",
  q: "A payment you made to the BMV is dishonored. What happens to your driving privileges?",
  options: [
    "They are suspended for one week",
    "You lose two points",
    "They are suspended indefinitely until the obligation plus all service, collection, and reinstatement fees are paid",
    "Nothing; the BMV sends a reminder"
  ],
  answer: 2,
  why: "If a payment to the BMV is dishonored, driving privileges are indefinitely suspended until the obligation plus all applicable fees are paid.",
  ref: "Ch. 5, p. 24" },
{ cat: "Rules & Penalties",
  q: "Can a court suspend a parent's driving privileges over delinquent child support?",
  options: [
    "No, never",
    "Only if the parent agrees",
    "Yes, until the court orders reinstatement",
    "Only for 30 days"
  ],
  answer: 2,
  why: "A court may order the BMV to suspend a parent's driving privileges for delinquent child support until the court orders reinstatement.",
  ref: "Ch. 5, p. 24" },
/* ---------- HABITUAL TRAFFIC VIOLATORS ---------- */
{ cat: "Rules & Penalties",
  q: "A Habitual Traffic Violator commits two major offenses resulting in injury or death within 10 years. What is the suspension?",
  options: [
    "One year",
    "Lifetime",
    "Five years",
    "Ten years"
  ],
  answer: 3,
  why: "HTV Section A: two major offenses resulting in injury or death within a 10-year period brings a 10-year suspension.",
  ref: "Ch. 5, p. 24" },
{ cat: "Rules & Penalties",
  q: "Two judgments within 10 years for OWI resulting in death bring what penalty?",
  options: [
    "A 5-year suspension",
    "A lifetime suspension",
    "A $1,000 fine only",
    "A 10-year suspension"
  ],
  answer: 1,
  why: "Two judgments within a 10-year period for OWI resulting in death result in a lifetime suspension of driving privileges.",
  ref: "Ch. 5, p. 24" },
{ cat: "Rules & Penalties",
  q: "HTV Section C covers 10 or more traffic violations in 10 years with one major offense. What is the suspension?",
  options: [
    "Three years",
    "Ten years",
    "Five years",
    "One year"
  ],
  answer: 2,
  why: "HTV Section C: 10 or more traffic violations in a 10-year period, one of which is a major offense, brings a 5-year suspension.",
  ref: "Ch. 5, p. 25" },
{ cat: "Rules & Penalties",
  q: "A court grants you specialized driving privileges. What must you do?",
  options: [
    "Keep an SR22 on file for the duration, carry a copy of the court order in the vehicle, produce it for law enforcement on request, and carry a valid credential",
    "Retake the driving test every month",
    "Nothing special",
    "Drive only at night"
  ],
  answer: 0,
  why: "A person granted specialized driving privileges must maintain an effective SR22, carry the court order in the vehicle, produce it on request, and carry a validly issued credential.",
  ref: "Ch. 5, p. 25" },
/* ---------- THE KNOWLEDGE EXAM ITSELF ---------- */
{ cat: "Rules & Penalties",
  q: "The operator's knowledge exam has 16 signs and 34 questions. How many can you miss and still pass?",
  options: [
    "Eight signs and twelve questions",
    "Four signs and ten questions",
    "You cannot miss any",
    "Only two signs and six questions"
  ],
  answer: 3,
  why: "You can miss only two signs and six questions in order to pass the operator's knowledge exam.",
  ref: "Ch. 9, p. 63" },
{ cat: "Rules & Penalties",
  q: "You fail the knowledge exam. When can you try again?",
  options: [
    "Not until the next day",
    "Later the same day",
    "After two months",
    "After 14 days"
  ],
  answer: 0,
  why: "If you fail the knowledge exam, you must wait until the next day to attempt it again.",
  ref: "Ch. 9, p. 63" },
{ cat: "Rules & Penalties",
  q: "The for-hire endorsement exam has 25 questions. How many can you miss and still pass?",
  options: [
    "Ten",
    "Three",
    "Five",
    "Eight"
  ],
  answer: 2,
  why: "On the for-hire endorsement exam (and the Motor Driven Cycle Class B exam), you can miss no more than five of the 25 questions.",
  ref: "Ch. 9, p. 63" },
/* ---------- PROBATIONARY LICENSE RULES ---------- */
{ cat: "Rules & Penalties",
  q: "You are under 21 when you get your Indiana driver's license. How long is it probationary?",
  options: [
    "For the first 180 days only",
    "It is never probationary",
    "Until you turn 21",
    "For one year"
  ],
  answer: 2,
  why: "If you are younger than 21 when you obtain a driver's license, it is probationary until you turn 21. It is valid until you are 21 years and 30 days old, and you may not renew it until you are 21 years and one day old.",
  ref: "Ch. 1, p. 9" },
{ cat: "Rules & Penalties",
  q: "During the first 180 days with a probationary license, when may you NOT drive?",
  options: [
    "On weekends",
    "Between 6 a.m. and 9 a.m.",
    "During rush hour",
    "Between 10 p.m. and 5 a.m."
  ],
  answer: 3,
  why: "For the first 180 days, a probationary driver may not drive between 10 p.m. and 5 a.m.",
  ref: "Ch. 1, p. 9" },
{ cat: "Rules & Penalties",
  q: "During the first 180 days of a probationary license, who may ride as your passenger?",
  options: [
    "Up to three friends at a time",
    "Any friends you want",
    "Only family members over 18",
    "No passengers unless a licensed individual age 25 or older is in front, your licensed spouse age 21 or older is present, or a driver training instructor is present"
  ],
  answer: 3,
  why: "During the first 180 days you may not drive with passengers unless a licensed individual age 25 or older is in the front passenger seat, your licensed spouse age 21 or older is present, or a licensed driver training instructor is present. Exception: you may drive with your child, stepchild, sibling, step or half-sibling, or spouse without another accompanying individual.",
  ref: "Ch. 1, p. 9" },
{ cat: "Rules & Penalties",
  q: "After the first 180 days but before age 21, which of these driving times is prohibited?",
  options: [
    "Monday at 8 a.m.",
    "Friday at 6 p.m.",
    "Sunday through Thursday after 11 p.m.",
    "Saturday at noon"
  ],
  answer: 2,
  why: "After 180 days until age 21: no driving Sunday through Thursday after 11 p.m., Monday through Friday before 5 a.m., or Saturday and Sunday between 1 a.m. and 5 a.m.",
  ref: "Ch. 1, p. 9" },
{ cat: "Rules & Penalties",
  q: "Which of these is an exception to the probationary license time restrictions?",
  options: [
    "Late-night food runs",
    "Driving to a party",
    "Lawful employment, a school-sanctioned activity, a religious event, or being accompanied by a licensed driver 25 or older or a spouse 21 or older",
    "Driving friends home late"
  ],
  answer: 2,
  why: "The time restrictions do not apply for lawful employment, school-sanctioned activities, religious events, or when accompanied by a licensed individual 25+ or a spouse 21+.",
  ref: "Ch. 1, p. 9" },
{ cat: "Rules & Penalties",
  q: "A probationary license holder may use a phone or texting device while driving only when?",
  options: [
    "At stoplights",
    "When using hands-free mode",
    "Whenever traffic is light",
    "Only to make a 911 emergency call"
  ],
  answer: 3,
  why: "Indiana law prohibits probationary license holders from operating a motor vehicle while using any telecommunications device unless it is being used to make a 911 emergency call.",
  ref: "Ch. 1, p. 10" },
{ cat: "Rules & Penalties",
  q: "The BMV must suspend a juvenile's driving privileges if the school reports what?",
  options: [
    "One missing homework assignment",
    "Expulsion, exclusion, a second or later suspension in one school year, habitual truancy, or withdrawal from school",
    "Being late to class once",
    "One bad grade"
  ],
  answer: 1,
  why: "The BMV must suspend a juvenile's driving privileges upon school notification of expulsion, exclusion, a second or subsequent suspension during one school year, habitual truancy, or withdrawal from school.",
  ref: "Ch. 1, p. 10" }
]);
