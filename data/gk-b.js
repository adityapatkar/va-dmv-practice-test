window.VA = window.VA || {};

// General knowledge bank B — Manual Section 3: Safe Driving (printed pp. 19–26).
window.VA.generalQuestions = (window.VA.generalQuestions || []).concat([
  // ---- Space Cushion & Following Distance (p. 19) ----
  {
    id: 'gB-001', topic: 'Following Distance',
    q: 'On a dry road at speeds under 35 mph, you should follow the vehicle ahead by at least:',
    options: ['Two seconds.', 'One second.', 'Three seconds.', 'Four seconds.'],
    answer: 0,
    explain: 'The manual\'s following distance chart calls for 2 seconds under 35 MPH on dry surfaces.',
    ref: 'Manual p. 19 – Following Distance'
  },
  {
    id: 'gB-002', topic: 'Following Distance',
    q: 'On a dry road at speeds between 35 and 45 mph, what following distance does the manual recommend?',
    options: ['Two seconds.', 'Three seconds.', 'Five seconds.', 'Four seconds.'],
    answer: 1,
    explain: 'The chart calls for 3 seconds of following distance at 35–45 MPH on dry surfaces.',
    ref: 'Manual p. 19 – Following Distance'
  },
  {
    id: 'gB-003', topic: 'Following Distance',
    q: 'On a dry highway at speeds between 46 and 70 mph, you should keep a following distance of at least:',
    options: ['Two seconds.', 'Three seconds.', 'Four seconds.', 'Six seconds.'],
    answer: 2,
    explain: 'The chart calls for 4 seconds of following distance at 46–70 MPH on dry surfaces.',
    ref: 'Manual p. 19 – Following Distance'
  },
  {
    id: 'gB-004', topic: 'Following Distance',
    q: 'To use the following distance rule, you count the seconds from when the vehicle ahead passes a fixed object until:',
    options: [
      'The vehicle ahead reaches the next fixed object.',
      'You can no longer see the fixed object.',
      'The vehicle behind you passes the same object.',
      'Your vehicle reaches the same fixed object.'
    ],
    answer: 3,
    explain: 'Glance at the vehicle ahead as it passes a fixed object, then count the seconds it takes you to reach the same place in the road.',
    ref: 'Manual p. 19 – Following Distance'
  },
  {
    id: 'gB-005', topic: 'Following Distance',
    q: 'If you reach the fixed mark before you have finished counting the recommended seconds, you should:',
    options: [
      'Slow down and increase your following distance.',
      'Change lanes and pass the vehicle ahead.',
      'Flash your headlights at the vehicle ahead.',
      'Keep your speed and count again at the next mark.'
    ],
    answer: 0,
    explain: 'Reaching the mark early means you are following too closely; slow down and increase your following distance.',
    ref: 'Manual p. 19 – Following Distance'
  },
  {
    id: 'gB-006', topic: 'Following Distance',
    q: 'In bad weather, heavy traffic, or on poor pavement, the manual says you should:',
    options: [
      'Use the two-second rule at every speed.',
      'Add extra seconds to your following distance.',
      'Follow more closely so others cannot cut in.',
      'Drive in the left lane to avoid traffic.'
    ],
    answer: 1,
    explain: 'For bad weather, heavy traffic, poor pavement or a vehicle in poor condition, add extra seconds to increase following distance.',
    ref: 'Manual p. 19 – Following Distance'
  },
  {
    id: 'gB-007', topic: 'Following Distance',
    q: 'According to the manual, the two-, three- and four-second space cushions do not work if you are:',
    options: [
      'Driving on a dry road.',
      'Following a passenger car.',
      'Speeding over 70 mph.',
      'Driving under 35 mph.'
    ],
    answer: 2,
    explain: 'The manual notes that the space cushions in the chart do not work if you are speeding over 70.',
    ref: 'Manual p. 19 – Following Distance'
  },
  {
    id: 'gB-008', topic: 'Following Distance',
    q: 'A driver\'s foot response time is normally about:',
    options: ['One-quarter of a second.', 'One full second.', 'Two seconds.', 'Three-quarters of a second.'],
    answer: 3,
    explain: 'The manual states hand response time is close to a half second and foot response time is normally three-quarters of a second.',
    ref: 'Manual p. 19 – Following Distance'
  },
  {
    id: 'gB-009', topic: 'Following Distance',
    q: 'A driver\'s hand response time is close to:',
    options: ['A half second.', 'Three-quarters of a second.', 'One and a half seconds.', 'Two seconds.'],
    answer: 0,
    explain: 'Hand response time is close to a half second; foot response time is normally three-quarters of a second.',
    ref: 'Manual p. 19 – Following Distance'
  },
  {
    id: 'gB-010', topic: 'Following Distance',
    q: 'In which situation should you increase your following distance?',
    options: [
      'When following a small passenger car.',
      'When following a motorcycle or bicycle.',
      'When entering an expressway.',
      'When driving on a dry, empty road.'
    ],
    answer: 1,
    explain: 'Increase following distance behind a motorcycle or bicycle, behind large vehicles, in bad weather or heavy traffic, when exiting an expressway, and when tailgated.',
    ref: 'Manual p. 19 – Following Distance'
  },
  {
    id: 'gB-011', topic: 'Following Distance',
    q: 'You should increase your following distance in all of these situations EXCEPT:',
    options: [
      'Behind a large vehicle that blocks your view of the road.',
      'When exiting an expressway onto a ramp.',
      'When following at a steady speed in light traffic.',
      'When another driver is tailgating you.'
    ],
    answer: 2,
    explain: 'The manual lists large vehicles blocking vision, bad weather or heavy traffic, exiting an expressway, motorcycles or bicycles, and being tailgated.',
    ref: 'Manual p. 19 – Following Distance'
  },
  {
    id: 'gB-012', topic: 'Space Cushion',
    q: 'The best way to create a space cushion around your vehicle is to:',
    options: [
      'Drive close to the left edge of your lane.',
      'Keep pace with the vehicle in the next lane.',
      'Drive slightly faster than surrounding traffic.',
      'Stay in the middle of your lane.'
    ],
    answer: 3,
    explain: 'Create a space cushion by staying in the middle of your lane with enough room ahead and behind for others to pass or stop safely.',
    ref: 'Manual p. 19 – Maintaining a Space Cushion'
  },
  {
    id: 'gB-013', topic: 'Tailgating',
    q: 'If another driver is tailgating you, you should:',
    options: [
      'Move over if possible, or gently tap your brakes and slow down.',
      'Brake suddenly so the tailgater is forced to back off.',
      'Speed up to put more distance between you and the driver.',
      'Turn on your hazard lights and stop in your lane.'
    ],
    answer: 0,
    explain: 'Do not brake suddenly. If possible move to another lane, or gently tap your brakes to flash your brake lights and slow down to encourage the tailgater to pass.',
    ref: 'Manual p. 19 – Following Distance'
  },
  {
    id: 'gB-014', topic: 'Tailgating',
    q: 'To warn the driver behind you that you plan to slow down or stop, you should:',
    options: [
      'Turn on your high-beam headlights.',
      'Tap your brakes.',
      'Sound your horn twice.',
      'Wave your arm out the window.'
    ],
    answer: 1,
    explain: 'Help the driver behind you by keeping a steady speed and tapping your brakes when you plan to slow down or stop.',
    ref: 'Manual p. 19 – Following Distance'
  },
  // ---- Searching (p. 19) ----
  {
    id: 'gB-015', topic: 'Searching',
    q: 'Expert drivers try to focus their eyes how far ahead?',
    options: ['5 to 10 seconds.', '10 to 15 seconds.', '20 to 30 seconds.', '45 to 60 seconds.'],
    answer: 2,
    explain: 'Expert drivers try to focus their eyes 20 to 30 seconds ahead, which in the city is about one block.',
    ref: 'Manual p. 19 – Searching'
  },
  {
    id: 'gB-016', topic: 'Searching',
    q: 'In the city, looking 20 to 30 seconds ahead equals approximately:',
    options: ['Two car lengths.', 'Half a mile.', 'Three blocks.', 'One block.'],
    answer: 3,
    explain: 'Expert drivers focus 20 to 30 seconds ahead; in the city that equals approximately one block.',
    ref: 'Manual p. 19 – Searching'
  },
  {
    id: 'gB-017', topic: 'Searching',
    q: 'How often should you check your rearview mirror for traffic behind you?',
    options: ['About every 10 seconds.', 'About every 30 seconds.', 'About once a minute.', 'Only when changing lanes.'],
    answer: 0,
    explain: 'Use your rearview mirror to check traffic behind you frequently, about every 10 seconds.',
    ref: 'Manual p. 19 – Searching'
  },
  {
    id: 'gB-018', topic: 'Searching',
    q: 'Before entering an intersection, you should look:',
    options: [
      'Right, then left, then right again.',
      'Left, then right, then left again.',
      'Straight ahead only.',
      'Right only, since cars on the right have the right-of-way.'
    ],
    answer: 1,
    explain: 'Check left to right and then left again. Look left first because cars coming from the left will be closer to you.',
    ref: 'Manual p. 19 – Searching'
  },
  {
    id: 'gB-019', topic: 'Searching',
    q: 'At an intersection, you should look to the left first because:',
    options: [
      'Drivers on the left must always yield to you.',
      'Traffic signals are placed on the left side.',
      'Cars coming from the left will be closer to you.',
      'Pedestrians usually cross from the left.'
    ],
    answer: 2,
    explain: 'At any intersection, look left first, since cars coming from the left will be closer to you.',
    ref: 'Manual p. 19 – Searching'
  },
  {
    id: 'gB-020', topic: 'Searching',
    q: 'Which of these is a clue that a parked vehicle may pull into your path?',
    options: [
      'Its windows are rolled up.',
      'It is parked close to the curb.',
      'Its hood is closed.',
      'Exhaust smoke or turned wheels.'
    ],
    answer: 3,
    explain: 'Look for exhaust smoke, brake or back-up lights and turned wheels; these clues warn that vehicles may pull into your path.',
    ref: 'Manual p. 19 – Searching'
  },
  {
    id: 'gB-021', topic: 'Searching',
    q: 'When searching the road ahead, you should:',
    options: [
      'Keep your eyes moving and scan from side to side.',
      'Stare at the middle of the road.',
      'Focus only on the vehicle directly ahead.',
      'Look mainly at your speedometer.'
    ],
    answer: 0,
    explain: 'Avoid staring at one thing or at the middle of the road; keep your eyes moving and scan from side to side.',
    ref: 'Manual p. 19 – Searching'
  },
  {
    id: 'gB-022', topic: 'Searching',
    q: 'You should check the traffic behind you when:',
    options: [
      'Driving at a steady speed on a straight road.',
      'Driving down a long, steep hill.',
      'Stopped at a red light with no one behind you.',
      'Turning on your radio.'
    ],
    answer: 1,
    explain: 'Check traffic behind you when changing lanes, backing up, slowing down quickly or driving down a long, steep hill.',
    ref: 'Manual p. 19 – Searching'
  },
  {
    id: 'gB-023', topic: 'Searching',
    q: 'When driving in rural areas, you should especially watch for:',
    options: [
      'Parking meters, loading zones and bus stops.',
      'Light rail crossings and streetcar tracks.',
      'Hidden driveways and slow-moving farm vehicles.',
      'Toll booths, express lanes and merge areas.'
    ],
    answer: 2,
    explain: 'In rural areas watch for hidden intersections and driveways, curves, hills, trucks, oversized and slow-moving farm vehicles, and bicycles.',
    ref: 'Manual p. 19 – Searching'
  },
  // ---- Blind Spots (p. 20) ----
  {
    id: 'gB-024', topic: 'Blind Spots',
    q: 'The best way to see a vehicle in your blind spot is to:',
    options: [
      'Check your inside rearview mirror carefully.',
      'Check your side mirror twice before moving.',
      'Signal and wait for other drivers to honk.',
      'Quickly glance over your shoulder.'
    ],
    answer: 3,
    explain: 'The best way to see a car in your blind spot is by quickly turning your head and glancing over your shoulder before changing lanes or passing.',
    ref: 'Manual p. 20 – Blind Spots'
  },
  {
    id: 'gB-025', topic: 'Blind Spots',
    q: 'Your side mirrors are properly adjusted when:',
    options: [
      'You can barely see the sides of your vehicle.',
      'Half of each mirror shows your vehicle.',
      'They show the same view as the inside mirror.',
      'They point at the lane markings next to your car.'
    ],
    answer: 0,
    explain: 'Adjust both side mirrors so you can barely see the sides of your vehicle; the inside mirror should frame the entire back window.',
    ref: 'Manual p. 20 – Blind Spots'
  },
  {
    id: 'gB-026', topic: 'Blind Spots',
    q: 'Your inside rearview mirror should be adjusted so that it:',
    options: [
      'Shows the left lane beside you.',
      'Frames the entire back window.',
      'Shows the back seat passengers.',
      'Points at the rear bumper.'
    ],
    answer: 1,
    explain: 'Make sure the inside rearview mirror frames the entire back window.',
    ref: 'Manual p. 20 – Blind Spots'
  },
  {
    id: 'gB-027', topic: 'Blind Spots',
    q: 'If you find yourself driving in another driver\'s blind spot, you should:',
    options: [
      'Stay there until the driver changes lanes.',
      'Honk so the driver knows you are there.',
      'Speed up or drop back.',
      'Move closer to the other vehicle.'
    ],
    answer: 2,
    explain: 'Avoid driving in someone else\'s blind spot. Speed up or drop back; don\'t stay in the other driver\'s blind spot.',
    ref: 'Manual p. 20 – Blind Spots'
  },
  // ---- Pedestrians (p. 20) ----
  {
    id: 'gB-028', topic: 'Pedestrians',
    q: 'You must come to a full stop for a pedestrian who is using:',
    options: [
      'A bicycle helmet.',
      'A crosswalk button.',
      'A stroller.',
      'A cane or guide dog.'
    ],
    answer: 3,
    explain: 'Drivers must come to a full stop for a pedestrian using a cane or guide dog, which indicates blindness or vision impairment.',
    ref: 'Manual p. 20 – Sharing the Road'
  },
  {
    id: 'gB-029', topic: 'Pedestrians',
    q: 'Failing to stop for a pedestrian lawfully crossing the roadway and causing serious bodily injury or death can result in:',
    options: ['A Class 1 misdemeanor.', 'A written warning.', 'A $50 fine only.', 'A Class 4 misdemeanor.'],
    answer: 0,
    explain: 'Failing to stop for pedestrians lawfully crossing and causing serious bodily damage or death can result in a Class 1 misdemeanor.',
    ref: 'Manual p. 20 – Sharing the Road'
  },
  {
    id: 'gB-030', topic: 'Pedestrians',
    q: 'Passing another vehicle at a crosswalk is:',
    options: [
      'Allowed if no pedestrians are visible.',
      'Illegal.',
      'Allowed during daylight hours only.',
      'Allowed if you sound your horn.'
    ],
    answer: 1,
    explain: 'Passing at a crosswalk is illegal because you may not see pedestrians crossing in front of other vehicles.',
    ref: 'Manual p. 20 – Sharing the Road'
  },
  {
    id: 'gB-031', topic: 'Pedestrians',
    q: 'When you stop for pedestrians crossing the road, you must remain stopped until they:',
    options: [
      'Reach the center line of the road.',
      'Make eye contact with you and wave.',
      'Have passed the lane you are stopped in.',
      'Step up onto the opposite curb.'
    ],
    answer: 2,
    explain: 'Stop and remain stopped until pedestrians have passed the lane in which your vehicle is stopped.',
    ref: 'Manual p. 20 – Sharing the Road'
  },
  {
    id: 'gB-032', topic: 'Pedestrians',
    q: 'When making a right or left turn and pedestrians are crossing, you should:',
    options: [
      'Turn slowly and carefully in front of them.',
      'Sound your horn to warn them you are turning.',
      'Turn once they reach the far lane of the street.',
      'Let them completely cross before turning.'
    ],
    answer: 3,
    explain: 'Pedestrians have the right-of-way when you turn; allow them to completely cross the street before beginning your turn.',
    ref: 'Manual p. 20 – Sharing the Road'
  },
  {
    id: 'gB-033', topic: 'Sharing the Road',
    q: 'Which of the following is considered a vulnerable road user?',
    options: [
      'A person on a skateboard.',
      'A tractor-trailer driver.',
      'A bus passenger.',
      'A driver of a low speed vehicle.'
    ],
    answer: 0,
    explain: 'Vulnerable road users include pedestrians and those on bicycles, wheelchairs, skateboards, roller skates, scooters, animals and animal-drawn vehicles.',
    ref: 'Manual p. 20 – Sharing the Road'
  },
  // ---- Bicycles (p. 20) ----
  {
    id: 'gB-034', topic: 'Bicycles',
    q: 'When passing a bicyclist, Virginia law requires you to leave at least:',
    options: ['Two feet of clearance.', 'Three feet of clearance.', 'Five feet of clearance.', 'Six feet of clearance.'],
    answer: 1,
    explain: 'State law requires motorists to pass cyclists with at least three feet of clearance.',
    ref: 'Manual p. 20 – Sharing the Road'
  },
  {
    id: 'gB-035', topic: 'Bicycles',
    q: 'If your lane is not wide enough to pass a bicyclist with three feet of clearance, you must:',
    options: [
      'Pass using the bicycle lane.',
      'Sound your horn so the cyclist moves over.',
      'Change lanes to pass safely.',
      'Pass quickly with less clearance.'
    ],
    answer: 2,
    explain: 'If the lane is not wide enough for a three-foot clearance, the motorist must change lanes to pass safely.',
    ref: 'Manual p. 20 – Sharing the Road'
  },
  {
    id: 'gB-036', topic: 'Bicycles',
    q: 'Bicyclists are legally allowed on all public roads except:',
    options: [
      'Two-lane rural roads.',
      'Roads with speed limits over 35 mph.',
      'One-way streets.',
      'Interstates and most freeways.'
    ],
    answer: 3,
    explain: 'Bicyclists are allowed on all public roads except interstates and most freeways (limited access highways).',
    ref: 'Manual p. 20 – Sharing the Road'
  },
  {
    id: 'gB-037', topic: 'Bicycles',
    q: 'May a motor vehicle use a marked bicycle lane to pass another vehicle?',
    options: [
      'No, not even while passing another vehicle.',
      'Yes, if no bicyclists are using the lane at the time.',
      'Yes, if the vehicle ahead is waiting to turn left.',
      'Yes, but only during daylight hours.'
    ],
    answer: 0,
    explain: 'Using marked bicycle lanes is prohibited by motor vehicles, including while passing.',
    ref: 'Manual p. 20 – Sharing the Road'
  },
  {
    id: 'gB-038', topic: 'Bicycles',
    q: 'A bicyclist may ride in the center of the lane when:',
    options: [
      'When riding at night with a headlight on.',
      'When about to turn left or the lane is too narrow.',
      'When there is no other traffic on the road.',
      'Never; bicyclists must ride on the shoulder.'
    ],
    answer: 1,
    explain: 'Bicyclists may ride in the center of the lane when necessary, such as when about to turn left or when the lane is too narrow to share side-by-side with a car.',
    ref: 'Manual p. 20 – Sharing the Road'
  },
  {
    id: 'gB-039', topic: 'Bicycles',
    q: 'On a roadway, a bicyclist generally has:',
    options: [
      'No right-of-way at all on public roads.',
      'The right-of-way over all motor vehicles.',
      'The same right-of-way as a motor vehicle driver.',
      'The right-of-way only inside bicycle lanes.'
    ],
    answer: 2,
    explain: 'Bicyclists on a roadway generally have the same right-of-way as the driver of a motor vehicle.',
    ref: 'Manual p. 20 – Sharing the Road'
  },
  {
    id: 'gB-040', topic: 'Bicycles',
    q: 'Before opening your car door after parking, you should:',
    options: [
      'Open the door quickly to get out of traffic.',
      'Signal with your left turn signal.',
      'Sound your horn.',
      'Look for cars, bicyclists and pedestrians.'
    ],
    answer: 3,
    explain: 'Look for other cars, bicyclists and pedestrians before opening the door; a bicycle\'s small size lets it slip into your blind spot.',
    ref: 'Manual p. 22 – Parking'
  },
  // ---- Motorcycles (p. 20) ----
  {
    id: 'gB-041', topic: 'Motorcycles',
    q: 'In more than half of all crashes involving motorcycles and automobiles:',
    options: [
      'The other driver didn\'t see the motorcycle in time.',
      'The motorcyclist was traveling over the speed limit.',
      'The motorcycle had some type of mechanical failure.',
      'The crash happened on an interstate highway.'
    ],
    answer: 0,
    explain: 'In more than half of motorcycle–automobile crashes, the other driver didn\'t see the motorcycle until it was too late.',
    ref: 'Manual p. 20 – Sharing the Road'
  },
  {
    id: 'gB-042', topic: 'Motorcycles',
    q: 'When following a motorcycle, you should:',
    options: [
      'Use the same following distance as for a car.',
      'Add an extra second to the following distance rule.',
      'Follow closely so the rider can see you.',
      'Drive beside the motorcycle in the same lane.'
    ],
    answer: 1,
    explain: 'Never tailgate a motorcycle; add an extra second to the following distance rule.',
    ref: 'Manual p. 20 – Sharing the Road'
  },
  {
    id: 'gB-043', topic: 'Motorcycles',
    q: 'In inclement weather, your extra following distance behind a motorcycle should be:',
    options: ['Cut in half.', 'Kept the same.', 'Doubled.', 'Tripled.'],
    answer: 2,
    explain: 'Add an extra second behind a motorcycle, and in inclement weather double this distance.',
    ref: 'Manual p. 20 – Sharing the Road'
  },
  {
    id: 'gB-044', topic: 'Motorcycles',
    q: 'Which statement about sharing a lane with a motorcycle is true?',
    options: [
      'You may drive beside a motorcycle if it stays near the edge.',
      'You may share the lane on multi-lane highways.',
      'You may share the lane if the rider waves you by.',
      'Never drive beside a motorcycle in the same lane.'
    ],
    answer: 3,
    explain: 'Motorcyclists use the entire lane and may make sudden moves; never drive beside a motorcycle in the same lane.',
    ref: 'Manual p. 20 – Sharing the Road'
  },
  {
    id: 'gB-045', topic: 'Motorcycles',
    q: 'Why should you be extra careful before pulling out in front of a motorcycle?',
    options: [
      'Its size can make you misjudge its speed and distance.',
      'Motorcycles always have the right-of-way in traffic.',
      'Motorcycles are unable to brake quickly when needed.',
      'Motorcycles are not required to use headlights.'
    ],
    answer: 0,
    explain: 'The size of a motorcycle can cause you to misjudge its speed and distance; check twice before pulling out.',
    ref: 'Manual p. 20 – Sharing the Road'
  },
  // ---- Light Rail & Low Speed Vehicles (p. 21) ----
  {
    id: 'gB-046', topic: 'Light Rail',
    q: 'When driving near light rail tracks such as The Tide in Norfolk, you should:',
    options: [
      'Drive around lowered gates if no train is visible.',
      'Expect trains on any track at any time.',
      'Shift gears while crossing the tracks.',
      'Stop on the tracks if traffic is backed up.'
    ],
    answer: 1,
    explain: 'Expect trains on any track at any time; never drive around lowered gates or stop, pass or shift on train tracks.',
    ref: 'Manual p. 21 – Sharing the Road (Light Rail)'
  },
  {
    id: 'gB-047', topic: 'Light Rail',
    q: 'You should not cross train tracks unless:',
    options: [
      'You can see the train and it is far enough away.',
      'The crossing gates have started to rise again.',
      'You can cross without stopping and clear the tracks.',
      'You flash your headlights to warn the operator.'
    ],
    answer: 2,
    explain: 'Don\'t cross train tracks unless you have enough room to cross without stopping and can clear the tracks to a safe distance.',
    ref: 'Manual p. 21 – Sharing the Road (Light Rail)'
  },
  {
    id: 'gB-048', topic: 'Low Speed Vehicles',
    q: 'Low speed vehicles may be operated on public roads with speed limits of:',
    options: ['25 mph or less.', '45 mph or less.', '55 mph or less.', '35 mph or less.'],
    answer: 3,
    explain: 'Low speed vehicles may be operated on public roads with speed limits of 35 MPH or less.',
    ref: 'Manual p. 21 – Sharing the Road (Low Speed Vehicles)'
  },
  {
    id: 'gB-049', topic: 'Low Speed Vehicles',
    q: 'Low speed vehicles have a maximum speed ranging from:',
    options: ['21 to 25 mph.', '10 to 15 mph.', '30 to 35 mph.', '40 to 45 mph.'],
    answer: 0,
    explain: 'Low speed vehicles are four-wheel vehicles with a maximum speed ranging from 21 to 25 MPH.',
    ref: 'Manual p. 21 – Sharing the Road (Low Speed Vehicles)'
  },
  {
    id: 'gB-050', topic: 'Low Speed Vehicles',
    q: 'Which statement about low speed vehicles is true?',
    options: [
      'Golf carts are classified as low speed vehicles.',
      'They must be registered and insured in Virginia.',
      'They do not need to meet federal safety standards.',
      'They may be driven by anyone without a license.'
    ],
    answer: 1,
    explain: 'Low speed vehicles must comply with federal safety standards and meet Virginia registration and insurance requirements; golf carts are not low speed vehicles.',
    ref: 'Manual p. 21 – Sharing the Road (Low Speed Vehicles)'
  },
  // ---- Trucks, Buses, RVs (p. 21) ----
  {
    id: 'gB-051', topic: 'Trucks and Buses',
    q: 'The danger areas around trucks, buses and RVs where crashes are more likely to occur are called:',
    options: ['Safety zones.', 'Buffer zones.', 'No-Zones.', 'Crash zones.'],
    answer: 2,
    explain: 'Danger areas around trucks, tractor-trailers, buses and RVs are called No-Zones and include blind spots.',
    ref: 'Manual p. 21 – Trucks, Tractor-Trailers, Buses and RVs'
  },
  {
    id: 'gB-052', topic: 'Trucks and Buses',
    q: 'If you are driving beside a truck and cannot see the driver\'s face in his side view mirror:',
    options: [
      'You are at a safe distance.',
      'The truck driver is not paying attention.',
      'You should honk to get his attention.',
      'The truck driver cannot see you.'
    ],
    answer: 3,
    explain: 'If you can\'t see the driver\'s face in his side view mirror, then he can\'t see you.',
    ref: 'Manual p. 21 – Trucks, Tractor-Trailers, Buses and RVs'
  },
  {
    id: 'gB-053', topic: 'Trucks and Buses',
    q: 'After passing a truck, it is safe to pull back in front of it when you:',
    options: [
      'See the whole front of the truck in your rearview mirror.',
      'Have just passed the front bumper of the truck\'s cab.',
      'Are even with the cab and can see the driver.',
      'Hear the truck driver sound the horn for you.'
    ],
    answer: 0,
    explain: 'When passing, look for the entire front of the truck in your rearview mirror before pulling in front, then maintain your speed.',
    ref: 'Manual p. 21 – Trucks, Tractor-Trailers, Buses and RVs'
  },
  {
    id: 'gB-054', topic: 'Trucks and Buses',
    q: 'Compared with cars, trucks, buses and RVs need:',
    options: [
      'About the same time and room to stop.',
      'Nearly twice the time and room to stop.',
      'Less room to stop because of heavier brakes.',
      'Ten times the room to stop.'
    ],
    answer: 1,
    explain: 'These vehicles need nearly twice the time and room to stop as cars.',
    ref: 'Manual p. 21 – Trucks, Tractor-Trailers, Buses and RVs'
  },
  {
    id: 'gB-055', topic: 'Trucks and Buses',
    q: 'A truck\'s blind spot may stretch approximately how far behind the vehicle?',
    options: ['20 feet.', '50 feet.', '200 feet.', '500 feet.'],
    answer: 2,
    explain: 'Truck, bus and RV blind spots may stretch up to 20 feet in front of the cab and approximately 200 feet behind the vehicle.',
    ref: 'Manual p. 21 – Trucks, Tractor-Trailers, Buses and RVs'
  },
  {
    id: 'gB-056', topic: 'Trucks and Buses',
    q: 'A truck\'s blind spot may stretch up to how far in front of the cab?',
    options: ['5 feet.', '10 feet.', '100 feet.', '20 feet.'],
    answer: 3,
    explain: 'Blind spots may stretch up to 20 feet in front of the cab and approximately 200 feet behind the vehicle.',
    ref: 'Manual p. 21 – Trucks, Tractor-Trailers, Buses and RVs'
  },
  {
    id: 'gB-057', topic: 'Trucks and Buses',
    q: 'A truck and its trailer may be as long as:',
    options: ['65 feet.', '40 feet.', '100 feet.', '120 feet.'],
    answer: 0,
    explain: 'A truck and its trailer may be as long as 65 feet, and passing it may take more than half a mile of clear road.',
    ref: 'Manual p. 21 – Trucks, Tractor-Trailers, Buses and RVs'
  },
  {
    id: 'gB-058', topic: 'Trucks and Buses',
    q: 'Passing a truck may take you more than how much clear road?',
    options: ['A quarter mile.', 'Half a mile.', 'One mile.', '500 feet.'],
    answer: 1,
    explain: 'It may take you more than half a mile of clear road to pass a truck.',
    ref: 'Manual p. 21 – Trucks, Tractor-Trailers, Buses and RVs'
  },
  {
    id: 'gB-059', topic: 'Trucks and Buses',
    q: 'A truck ahead of you is making a wide right turn and has left space between it and the curb. You should:',
    options: [
      'Pass on the right through the open space.',
      'Sound your horn and pass the truck quickly.',
      'Wait; never squeeze between the truck and curb.',
      'Move up beside the truck so the driver sees you.'
    ],
    answer: 2,
    explain: 'Trucks swing wide to turn and can\'t see cars beside them; never squeeze between a truck, bus or RV and the curb or another vehicle.',
    ref: 'Manual p. 21 – Trucks, Tractor-Trailers, Buses and RVs'
  },
  {
    id: 'gB-060', topic: 'Trucks and Buses',
    q: 'Why is following too closely behind a truck dangerous?',
    options: [
      'The truck may roll backward into you.',
      'Trucks are required to brake very slowly.',
      'Trucks often stop without using brake lights.',
      'The driver can\'t see you, and you can\'t see ahead.'
    ],
    answer: 3,
    explain: 'Trucks have huge rear No-Zones; the driver can\'t see your car and you can\'t see traffic ahead, so maintain a safe following distance.',
    ref: 'Manual p. 21 – Trucks, Tractor-Trailers, Buses and RVs'
  },
  // ---- Trailers (p. 21) ----
  {
    id: 'gB-061', topic: 'Trailers',
    q: 'Towing a light to medium trailer makes your vehicle take how long to pass, stop, accelerate and turn?',
    options: ['Twice as long.', 'The same amount of time.', 'Half as long.', 'Four times as long.'],
    answer: 0,
    explain: 'Towing a trailer places additional stress on the vehicle; it takes twice as long to pass, stop, accelerate and turn.',
    ref: 'Manual p. 21 – Light to Medium Trailers'
  },
  {
    id: 'gB-062', topic: 'Trailers',
    q: 'If the trailer you are towing starts to sway, you should:',
    options: ['Speed up.', 'Slow down.', 'Brake hard.', 'Steer sharply the opposite way.'],
    answer: 1,
    explain: 'If your trailer starts to sway, slow down.',
    ref: 'Manual p. 21 – Light to Medium Trailers'
  },
  {
    id: 'gB-063', topic: 'Trailers',
    q: 'When backing a trailer, where should you place your hand on the steering wheel?',
    options: ['At the top.', 'At the left side.', 'At the bottom.', 'At the right side.'],
    answer: 2,
    explain: 'When backing up with a trailer, place your hand on the bottom of the steering wheel.',
    ref: 'Manual p. 21 – Light to Medium Trailers'
  },
  {
    id: 'gB-064', topic: 'Trailers',
    q: 'To back a trailer to the left, with your hand at the bottom of the steering wheel you should:',
    options: [
      'Use your right hand to move the wheel right.',
      'Use your right hand to move the wheel left.',
      'Use both hands at the top and turn right.',
      'Use your left hand to move the wheel left.'
    ],
    answer: 3,
    explain: 'To back the trailer to the left, use your left hand to move the wheel left; to the right, use your right hand to move it right.',
    ref: 'Manual p. 21 – Light to Medium Trailers'
  },
  {
    id: 'gB-065', topic: 'Trailers',
    q: 'Before each trip with a light to medium trailer, your safety inspection should confirm that:',
    options: [
      'The safety chains are properly attached.',
      'The trailer tires are overinflated.',
      'The trailer brake lights are disconnected.',
      'The trailer is loaded heavier in the back.'
    ],
    answer: 0,
    explain: 'Check that the pin is intact, the hitch coupler is secured, safety chains are attached, the electrical plug is installed and lights work.',
    ref: 'Manual p. 21 – Light to Medium Trailers'
  },
  // ---- Backing (p. 22) ----
  {
    id: 'gB-066', topic: 'Backing',
    q: 'The most common mistake drivers make when backing up is:',
    options: [
      'Backing too slowly.',
      'Failing to look both ways behind them.',
      'Using the parking brake.',
      'Turning on the hazard lights.'
    ],
    answer: 1,
    explain: 'The most common backing mistake is failing to look both ways behind the vehicle; mirrors do not give a full view.',
    ref: 'Manual p. 22 – Backing'
  },
  {
    id: 'gB-067', topic: 'Backing',
    q: 'To see as much as possible when backing up, you should:',
    options: [
      'Rely on your side mirrors only.',
      'Rely on your inside rearview mirror.',
      'Turn your body and head and look out the rear window.',
      'Open your door and lean out to look behind.'
    ],
    answer: 2,
    explain: 'Mirrors do not give a full view. Turn your body and head to the right and look through the rear window, backing slowly.',
    ref: 'Manual p. 22 – Backing'
  },
  // ---- Parking (p. 22) ----
  {
    id: 'gB-068', topic: 'Parking',
    q: 'When parking next to a curb, you may not park more than how far from the curb?',
    options: ['6 inches.', '18 inches.', '2 feet.', '1 foot.'],
    answer: 3,
    explain: 'If you park next to a curb, pull close to it; you may not park more than one foot from the curb.',
    ref: 'Manual p. 22 – Parking'
  },
  {
    id: 'gB-069', topic: 'Parking',
    q: 'You may not park within how many feet of a fire hydrant?',
    options: ['15 feet.', '10 feet.', '20 feet.', '50 feet.'],
    answer: 0,
    explain: 'You may not park within 15 feet of a fire hydrant.',
    ref: 'Manual p. 22 – Parking'
  },
  {
    id: 'gB-070', topic: 'Parking',
    q: 'You may not park within how many feet of an intersection?',
    options: ['15 feet.', '20 feet.', '30 feet.', '50 feet.'],
    answer: 1,
    explain: 'You may not park within 20 feet of an intersection.',
    ref: 'Manual p. 22 – Parking'
  },
  {
    id: 'gB-071', topic: 'Parking',
    q: 'You may not park within how many feet of a railroad crossing?',
    options: ['15 feet.', '20 feet.', '50 feet.', '100 feet.'],
    answer: 2,
    explain: 'You may not park within 50 feet of a railroad crossing.',
    ref: 'Manual p. 22 – Parking'
  },
  {
    id: 'gB-073', topic: 'Parking',
    q: 'You may not park within how many feet of the entrance to a fire, ambulance or rescue squad station?',
    options: ['15 feet.', '20 feet.', '50 feet.', '500 feet.'],
    answer: 0,
    explain: 'You may not park within 15 feet of the entrance to a fire, ambulance or rescue squad station.',
    ref: 'Manual p. 22 – Parking'
  },
  {
    id: 'gB-074', topic: 'Parking',
    q: 'On a two-way street, you should park:',
    options: [
      'On either side of the road.',
      'On the right side of the road.',
      'On the left side of the road.',
      'In the center turn lane.'
    ],
    answer: 1,
    explain: 'On a two-way street, park on the right side of the road; on a one-way road, park on either side.',
    ref: 'Manual p. 22 – Parking'
  },
  {
    id: 'gB-075', topic: 'Parking',
    q: 'On a one-way road, you may park:',
    options: [
      'On the right side only.',
      'On the left side only.',
      'On either side.',
      'Only in marked loading zones.'
    ],
    answer: 2,
    explain: 'On a one-way road, you may park on either side.',
    ref: 'Manual p. 22 – Parking'
  },
  {
    id: 'gB-076', topic: 'Parking',
    q: 'Where is parking NOT allowed?',
    options: [
      'In a marked space on the right side of a two-way street.',
      'Close to the curb on a one-way street.',
      'On a shoulder pulled as far over as possible.',
      'In the striped access aisle next to a disabled parking space.'
    ],
    answer: 3,
    explain: 'You may not park in a disabled parking space or in the striped access aisles next to one, among other prohibited places.',
    ref: 'Manual p. 22 – Parking'
  },
  {
    id: 'gB-077', topic: 'Parking',
    q: 'Which of these is a place where you may NOT park?',
    options: [
      'On the hard surface of a road with no curb.',
      'Within one foot of the curb on a city street.',
      'On the right side of a two-way street.',
      'On a wide shoulder, far away from traffic.'
    ],
    answer: 0,
    explain: 'You may not park on the hard surface of a road when no curb is present; pull as far off onto the shoulder as possible.',
    ref: 'Manual p. 22 – Parking'
  },
  {
    id: 'gB-078', topic: 'Parking',
    q: 'Curbs painted yellow mean:',
    options: [
      'Parking is limited to 15 minutes.',
      'Parking is prohibited.',
      'Parking is for loading only.',
      'Parking is for disabled persons only.'
    ],
    answer: 1,
    explain: 'You may not park within areas where parking is prohibited by curbs painted yellow or No Parking signs.',
    ref: 'Manual p. 22 – Parking'
  },
  {
    id: 'gB-079', topic: 'Parking on Hills',
    q: 'When parking uphill with a curb, you should turn your front wheels:',
    options: ['Right, toward the curb.', 'Straight ahead.', 'Left, away from the curb.', 'Either direction.'],
    answer: 2,
    explain: 'Parking uphill with a curb: turn front wheels left so the vehicle will not roll into the street.',
    ref: 'Manual p. 22 – Parking on a Hill'
  },
  {
    id: 'gB-080', topic: 'Parking on Hills',
    q: 'When parking downhill with a curb, you should turn your front wheels:',
    options: ['Left, away from the curb.', 'Straight ahead.', 'Either direction.', 'Right, toward the curb.'],
    answer: 3,
    explain: 'Parking downhill with a curb: turn front wheels right so the vehicle will not roll into the street.',
    ref: 'Manual p. 22 – Parking on a Hill'
  },
  {
    id: 'gB-081', topic: 'Parking on Hills',
    q: 'When parking on a hill with no curb, uphill or downhill, you should turn your front wheels:',
    options: ['To the right.', 'To the left.', 'Straight ahead.', 'Left uphill and right downhill.'],
    answer: 0,
    explain: 'Without a curb, turn the wheels right (both uphill and downhill) so if the vehicle rolls, the rear rolls away from traffic.',
    ref: 'Manual p. 22 – Parking on a Hill'
  },
  {
    id: 'gB-082', topic: 'Parking on Hills',
    q: 'When parking on a hill without a curb, the wheels should be turned so that if the vehicle rolls:',
    options: [
      'It rolls straight down the hill.',
      'The rear of the vehicle rolls away from traffic.',
      'The front of the vehicle rolls into traffic.',
      'It rolls toward the center line.'
    ],
    answer: 1,
    explain: 'Without a curb, turn the front wheels so that if the vehicle rolls, the rear of the vehicle will roll away from traffic.',
    ref: 'Manual p. 22 – Parking on a Hill'
  },
  // ---- Visibility & Lights (p. 22) ----
  {
    id: 'gB-083', topic: 'Visibility',
    q: 'According to the manual, the single biggest contributor to crashes is:',
    options: [
      'Bad weather.',
      'Poor vehicle maintenance.',
      'Failing to identify a risk.',
      'Driving at night.'
    ],
    answer: 2,
    explain: 'The single biggest contributor to crashes is failing to identify a risk.',
    ref: 'Manual p. 22 – Visibility'
  },
  {
    id: 'gB-084', topic: 'Headlights',
    q: 'Virginia law requires you to use your headlights in rain, fog, snow or sleet when visibility is reduced to:',
    options: ['100 feet.', '200 feet.', '1,000 feet.', '500 feet.'],
    answer: 3,
    explain: 'Virginia law requires headlights in inclement weather when visibility is reduced to 500 feet.',
    ref: 'Manual p. 22 – Lights'
  },
  {
    id: 'gB-085', topic: 'Headlights',
    q: 'You must use your headlights whenever:',
    options: [
      'You use your wipers because of bad weather.',
      'You drive on any interstate or freeway.',
      'You drive faster than 45 mph on a highway.',
      'You carry passengers in the back seat.'
    ],
    answer: 0,
    explain: 'You must use your headlights whenever you use your windshield wipers as a result of bad weather.',
    ref: 'Manual p. 22 – Lights'
  },
  // ---- Hazardous Conditions & Night (p. 23) ----
  {
    id: 'gB-086', topic: 'Hazardous Conditions',
    q: 'Your first response to decreased visibility and dangerous road conditions should be to:',
    options: [
      'Turn on your hazard lights.',
      'Reduce your speed.',
      'Pull off the road.',
      'Switch to high-beam headlights.'
    ],
    answer: 1,
    explain: 'Reducing your speed should be your first response to decreased visibility and dangerous road conditions.',
    ref: 'Manual p. 23 – Hazardous Conditions'
  },
  {
    id: 'gB-087', topic: 'Hazardous Conditions',
    q: 'In hazardous conditions such as rain, snow or ice, you should increase your space cushion by:',
    options: [
      'Adding one-half second to your following distance.',
      'Following the vehicle ahead more closely to see its taillights.',
      'Doubling your normal following distance.',
      'Keeping your normal following distance.'
    ],
    answer: 2,
    explain: 'In hazardous conditions, increase your space cushion by doubling your normal following distance.',
    ref: 'Manual p. 23 – Hazardous Conditions'
  },
  {
    id: 'gB-088', topic: 'Night Driving',
    q: 'You must use your headlights:',
    options: [
      'Only on unlit roads.',
      'From one hour after sunset to one hour before sunrise.',
      'Only when other vehicles are nearby.',
      'From sunset to sunrise.'
    ],
    answer: 3,
    explain: 'You must use headlights from sunset to sunrise; turn them on as soon as light begins to fade.',
    ref: 'Manual p. 23 – Night Driving'
  },
  {
    id: 'gB-089', topic: 'Night Driving',
    q: 'When following another vehicle at night, you should use low-beam headlights whenever you are within:',
    options: ['200 feet of the vehicle ahead.', '100 feet of the vehicle ahead.', '500 feet of the vehicle ahead.', '1,000 feet of the vehicle ahead.'],
    answer: 0,
    explain: 'When following, use low-beams whenever you are within 200 feet of the vehicle ahead.',
    ref: 'Manual p. 23 – Night Driving'
  },
  {
    id: 'gB-090', topic: 'Night Driving',
    q: 'On a highway at night, you should dim your high beams when an oncoming vehicle is within:',
    options: ['200 feet.', '500 feet.', '800 feet.', '1,000 feet.'],
    answer: 1,
    explain: 'Use high-beams on highways unless another vehicle is within 500 feet coming toward you.',
    ref: 'Manual p. 23 – Night Driving'
  },
  {
    id: 'gB-091', topic: 'Night Driving',
    q: 'If an oncoming driver does not dim his high beams, you should:',
    options: [
      'Turn on your high beams to warn him.',
      'Look directly at his headlights to judge distance.',
      'Glance toward the side of the road, then look quickly ahead.',
      'Stop your vehicle until he passes.'
    ],
    answer: 2,
    explain: 'Avoid looking at the bright lights; glance toward the side of the road, then look quickly ahead. Do not turn on your high beams.',
    ref: 'Manual p. 23 – Night Driving'
  },
  {
    id: 'gB-092', topic: 'Night Driving',
    q: 'When driving in cities and towns at night, you should use:',
    options: [
      'High beams at all times on every street.',
      'Parking lights only on well-lit streets.',
      'Fog lights only, to avoid blinding others.',
      'Low beams, except on streets with no lighting.'
    ],
    answer: 3,
    explain: 'Use low-beams when driving in cities and towns, except on streets where there is no lighting.',
    ref: 'Manual p. 23 – Night Driving'
  },
  // ---- Fog, Rain, Snow (p. 23) ----
  {
    id: 'gB-093', topic: 'Fog',
    q: 'When driving in heavy fog, you should use:',
    options: [
      'Low-beam headlights.',
      'High-beam headlights.',
      'Parking lights only.',
      'Hazard lights while moving.'
    ],
    answer: 0,
    explain: 'Fog reflects light back into your eyes; use low-beam headlights in heavy fog and look for road edge markings.',
    ref: 'Manual p. 23 – Fog'
  },
  {
    id: 'gB-094', topic: 'Rain',
    q: 'Roads are most likely to be slippery during which period after rain begins?',
    options: [
      'After it has rained for several hours.',
      'During the first half-hour.',
      'Only after the rain stops.',
      'During the first five minutes only.'
    ],
    answer: 1,
    explain: 'During the first half-hour of rain, roads are more likely to be slippery because oil on the road mixes with water.',
    ref: 'Manual p. 23 – Rain'
  },
  {
    id: 'gB-095', topic: 'Rain',
    q: 'Driving through ponded water can cause your vehicle to:',
    options: [
      'Gain traction.',
      'Use less fuel.',
      'Hydroplane or lose control.',
      'Stop more quickly.'
    ],
    answer: 2,
    explain: 'Ponded water can cause vehicles to hydroplane or otherwise lose control; use caution and avoid it if possible.',
    ref: 'Manual p. 23 – Rain'
  },
  {
    id: 'gB-096', topic: 'Snow and Ice',
    q: 'When you need to stop on a slippery surface, you should:',
    options: [
      'Brake hard and hold the pedal down firmly.',
      'Shift into neutral and coast to a stop.',
      'Pump the accelerator to keep the wheels turning.',
      'Release the accelerator and brake gently.'
    ],
    answer: 3,
    explain: 'On slippery surfaces, release the accelerator and apply brakes gently; a slow, steady speed gives you control.',
    ref: 'Manual p. 23 – Snow'
  },
  {
    id: 'gB-097', topic: 'Snow and Ice',
    q: 'Which road surfaces freeze before other road surfaces?',
    options: ['Bridges.', 'Highway on-ramps.', 'Sunny hilltops.', 'Freshly paved roads.'],
    answer: 0,
    explain: 'Watch for ice on bridges and in shady areas; bridges freeze before other road surfaces.',
    ref: 'Manual p. 23 – Snow'
  },
  {
    id: 'gB-098', topic: 'Snow and Ice',
    q: 'Before driving after a snowfall, you should remove snow and ice from:',
    options: [
      'The windshield and driver\'s window only.',
      'Your entire car, including the roof and lights.',
      'The front and rear windows and nothing else.',
      'The driver\'s side window and mirror only.'
    ],
    answer: 1,
    explain: 'Remove snow and ice from your entire car, including the roof, hood and rear, and clear all windows, mirrors and lights.',
    ref: 'Manual p. 23 – Snow'
  },
  {
    id: 'gB-099', topic: 'Snow and Ice',
    q: 'On slippery surfaces, you have the most traction and control when:',
    options: [
      'The front wheels are locked.',
      'You are braking hard.',
      'The front tires are rolling.',
      'You are accelerating quickly.'
    ],
    answer: 2,
    explain: 'You have the most traction and control when the front tires are rolling; keep a slow, steady speed rather than braking hard.',
    ref: 'Manual p. 23 – Snow'
  },
  // ---- Aggressive Driving (p. 23) ----
  {
    id: 'gB-100', topic: 'Aggressive Driving',
    q: 'If you are convicted of aggressive driving, your license could be suspended for:',
    options: [
      'Up to 30 days.',
      'One year.',
      'Three years.',
      'Ten days to six months.'
    ],
    answer: 3,
    explain: 'A conviction for aggressive driving could result in license suspension for ten days or for as long as six months.',
    ref: 'Manual p. 23 – Aggressive Driving'
  },
  {
    id: 'gB-101', topic: 'Aggressive Driving',
    q: 'If you encounter an aggressive driver, you should:',
    options: [
      'Stay out of the way and avoid eye contact.',
      'Speed up so the driver cannot pass.',
      'Make eye contact to show you are not intimidated.',
      'Brake suddenly to slow the driver down.'
    ],
    answer: 0,
    explain: 'Stay out of the way; don\'t challenge the aggressive driver by speeding up, and avoid eye contact and ignore gestures.',
    ref: 'Manual p. 23 – Aggressive Driving'
  },
  {
    id: 'gB-102', topic: 'Aggressive Driving',
    q: 'Virginia law defines aggressive driving as committing a traffic offense with the intent to:',
    options: [
      'Arrive at a destination more quickly.',
      'Harass, intimidate, injure or obstruct another person.',
      'Avoid a crash with another vehicle on the road.',
      'Test the speed and handling of the vehicle.'
    ],
    answer: 1,
    explain: 'Aggressive driving is the intent to harass, intimidate, injure or obstruct another person while committing one or more traffic offenses.',
    ref: 'Manual p. 23 – Aggressive Driving'
  },
  // ---- Distracted Driving (p. 24) ----
  {
    id: 'gB-103', topic: 'Distracted Driving',
    q: 'Virginia law prohibits drivers from holding a cell phone while driving except:',
    options: [
      'When stopped at a red light in traffic.',
      'When driving slower than 25 mph.',
      'In a driver emergency or when lawfully parked.',
      'When reading or replying to a text message.'
    ],
    answer: 2,
    explain: 'Holding a cell phone or wireless device while driving is prohibited except in a driver emergency or when the vehicle is lawfully parked or stopped.',
    ref: 'Manual p. 24 – Distracted Driving'
  },
  {
    id: 'gB-104', topic: 'Distracted Driving',
    q: 'Annually, driver distraction accounts for roughly what percentage of traffic crashes in Virginia?',
    options: ['5 percent.', '33 percent.', '50 percent.', '17 percent.'],
    answer: 3,
    explain: 'Driver distraction accounts for roughly 17 percent of all traffic crashes in Virginia each year.',
    ref: 'Manual p. 24 – Distracted Driving'
  },
  {
    id: 'gB-105', topic: 'Distracted Driving',
    q: 'Using a phone for navigation while driving is allowed as long as you:',
    options: [
      'Are not holding it or entering information.',
      'Hold it below the dashboard.',
      'Only enter the address at stop signs.',
      'Use it with one hand on the wheel.'
    ],
    answer: 0,
    explain: 'A mobile device may be used for navigation as long as the driver is not entering information or holding it while driving.',
    ref: 'Manual p. 24 – Distracted Driving'
  },
  {
    id: 'gB-106', topic: 'Distracted Driving',
    q: 'To reduce distractions, you should set your vehicle controls and devices:',
    options: [
      'While stopped at a traffic light or stop sign.',
      'Before you begin driving.',
      'While driving on a straight, empty stretch of road.',
      'Whenever traffic around you is light.'
    ],
    answer: 1,
    explain: 'Set or adjust the controls on the vehicle and other devices as soon as you get in the car and before you begin driving.',
    ref: 'Manual p. 24 – Distracted Driving'
  },
  // ---- Drowsy Driving (p. 24) ----
  {
    id: 'gB-107', topic: 'Drowsy Driving',
    q: 'To avoid drowsy driving on long trips, you should stop for rest at least every:',
    options: ['Four hours.', 'Hour.', 'Two hours.', 'Three hours.'],
    answer: 2,
    explain: 'Limit long distance driving and stop at least every two hours for rest.',
    ref: 'Manual p. 24 – Drowsy Driving'
  },
  {
    id: 'gB-108', topic: 'Drowsy Driving',
    q: 'Which is a reliable way to deal with drowsiness while driving?',
    options: [
      'Rolling down a window.',
      'Drinking coffee or an energy drink.',
      'Turning up the radio.',
      'Stopping at a safe place to take a nap.'
    ],
    answer: 3,
    explain: 'Windows, gum, radio and caffeine are not reliable. Stop in a safe place and nap; as little as 10 to 20 minutes of sleep can help.',
    ref: 'Manual p. 24 – Drowsy Driving'
  },
  {
    id: 'gB-109', topic: 'Drowsy Driving',
    q: 'To avoid drowsy driving, the manual advises avoiding driving between:',
    options: ['10 p.m. and 6 a.m.', '6 p.m. and 10 p.m.', '6 a.m. and 9 a.m.', 'Noon and 4 p.m.'],
    answer: 0,
    explain: 'To avoid drowsy driving, avoid driving from 10 p.m. to 6 a.m.',
    ref: 'Manual p. 24 – Drowsy Driving'
  },
  {
    id: 'gB-110', topic: 'Drowsy Driving',
    q: 'A short nap to fight drowsiness can make a big difference. The manual says as little as:',
    options: ['5 minutes.', '10 to 20 minutes.', '45 minutes.', 'Two hours.'],
    answer: 1,
    explain: 'Stop at a safe place and take a nap; as little as 10 to 20 minutes of sleep can make a big difference.',
    ref: 'Manual p. 24 – Drowsy Driving'
  },
  {
    id: 'gB-111', topic: 'Drowsy Driving',
    q: 'Which of these is a sign of drowsy driving?',
    options: [
      'Checking your mirrors often.',
      'Keeping a steady speed.',
      'Hitting rumble strips or missing exits.',
      'Signaling before lane changes.'
    ],
    answer: 2,
    explain: 'Signs include yawning, head nodding, heavy eyelids, missing signs or exits, unplanned lane changes, and hitting rumble strips.',
    ref: 'Manual p. 24 – Drowsy Driving'
  },
  // ---- Drinking and Driving (pp. 24–25) ----
  {
    id: 'gB-112', topic: 'Alcohol and Drugs',
    q: 'A driver age 21 or older is considered to be driving under the influence (DUI) with a BAC of:',
    options: ['.02 percent or higher.', '.05 percent or higher.', '.10 percent or higher.', '.08 percent or higher.'],
    answer: 3,
    explain: 'Drivers 21 or older are considered DUI with a BAC of .08 percent or higher.',
    ref: 'Manual p. 24 – Drunk and Drugged Driving'
  },
  {
    id: 'gB-113', topic: 'Alcohol and Drugs',
    q: 'A driver under age 21 can be convicted of illegal consumption of alcohol with a BAC of at least:',
    options: ['.02 but less than .08.', '.01 but less than .05.', '.05 but less than .10.', '.08 or higher only.'],
    answer: 0,
    explain: 'Under age 21, a BAC of at least .02 but less than .08 can lead to conviction of illegal consumption of alcohol; .08 or higher can be DUI.',
    ref: 'Manual p. 24 – Drunk and Drugged Driving'
  },
  {
    id: 'gB-114', topic: 'Alcohol and Drugs',
    q: 'Can you be convicted of DUI with a BAC lower than .08 percent?',
    options: [
      'No, never.',
      'Yes, if your driving is impaired.',
      'Only if you are a commercial driver.',
      'Only if you cause a crash.'
    ],
    answer: 1,
    explain: 'If your driving is impaired, you can be convicted of driving under the influence with a BAC lower than .08 percent.',
    ref: 'Manual p. 24 – Drunk and Drugged Driving'
  },
  {
    id: 'gB-115', topic: 'Alcohol and Drugs',
    q: 'Twelve ounces of beer contains about the same amount of alcohol as:',
    options: [
      'Two shots of liquor.',
      'A twelve-ounce glass of wine.',
      'A five-ounce glass of wine.',
      'Half a shot of liquor.'
    ],
    answer: 2,
    explain: 'Twelve ounces of beer is the same as a shot of liquor or a five-ounce glass of wine.',
    ref: 'Manual p. 25 – Drunk and Drugged Driving'
  },
  {
    id: 'gB-116', topic: 'Alcohol and Drugs',
    q: 'The only thing that can decrease intoxication is:',
    options: ['Coffee.', 'A cold shower.', 'Exercise.', 'Time.'],
    answer: 3,
    explain: 'Only time can decrease intoxication. Coffee, cold showers or exercise will not sober you up.',
    ref: 'Manual p. 25 – Drunk and Drugged Driving'
  },
  {
    id: 'gB-117', topic: 'Alcohol and Drugs',
    q: 'Compared with driving sober, your chances of a crash if you drive after drinking are:',
    options: ['Seven times greater.', 'Two times greater.', 'Three times greater.', 'About the same.'],
    answer: 0,
    explain: 'Because alcohol affects judgment and driving ability, your chances of a crash are seven times greater if you drive after drinking.',
    ref: 'Manual p. 25 – Drunk and Drugged Driving'
  },
  {
    id: 'gB-118', topic: 'Alcohol and Drugs',
    q: 'Researchers estimate that between 10 p.m. and 2 a.m., how many drivers are drunk?',
    options: ['One out of every ten.', 'Three out of every ten.', 'Five out of every ten.', 'One out of every hundred.'],
    answer: 1,
    explain: 'Researchers estimate that between 10 PM and 2 AM three out of every ten drivers are drunk.',
    ref: 'Manual p. 24 – Drunk and Drugged Driving'
  },
  {
    id: 'gB-119', topic: 'Alcohol and Drugs',
    q: 'Taking one alcoholic drink while on another drug, such as allergy or cold medicine:',
    options: [
      'Has no added effect on your ability to drive.',
      'Cancels out the effects of the medicine.',
      'Can affect you like several alcoholic drinks.',
      'Is safe as long as the medicine is over-the-counter.'
    ],
    answer: 2,
    explain: 'Combining alcohol and drugs multiplies the effects; one drink on another drug can affect you like several alcoholic beverages.',
    ref: 'Manual p. 25 – Drunk and Drugged Driving'
  },
  {
    id: 'gB-120', topic: 'Alcohol and Drugs',
    q: 'Which statement about marijuana and driving in Virginia is true?',
    options: [
      'Adults over 21 may drive after using marijuana.',
      'Marijuana does not affect driving.',
      'Driving under the influence of marijuana is legal if it was bought legally.',
      'Driving under the influence of marijuana is illegal.'
    ],
    answer: 3,
    explain: 'Although possession of marijuana by those over 21 is legal, driving under the influence of marijuana is still illegal.',
    ref: 'Manual p. 25 – Drunk and Drugged Driving'
  },
  {
    id: 'gB-121', topic: 'Alcohol and Drugs',
    q: 'The only way to avoid the risks of drinking and driving is to:',
    options: [
      'Decide before drinking that you will not drive.',
      'Drink several cups of coffee before driving home.',
      'Drive slowly and only take back roads home.',
      'Wait 30 minutes after your last drink to drive.'
    ],
    answer: 0,
    explain: 'The only way to avoid the risks is to decide before you start drinking that you are not going to drive.',
    ref: 'Manual p. 25 – Drunk and Drugged Driving'
  },
  {
    id: 'gB-122', topic: 'Alcohol and Drugs',
    q: 'If your driving is impaired because of any drug, you:',
    options: [
      'Face lesser penalties than for alcohol.',
      'May face the same penalties as for alcohol DUI.',
      'Face no penalty if the drug was prescribed.',
      'Only receive a warning for a first offense.'
    ],
    answer: 1,
    explain: 'If your driving is impaired by any drug, you may face the same penalties as driving under the influence of alcohol.',
    ref: 'Manual p. 24 – Drunk and Drugged Driving'
  },
  {
    id: 'gB-123', topic: 'Alcohol and Drugs',
    q: 'Even a small amount of alcohol affects which brain functions most important for driving?',
    options: [
      'Hearing, smell and taste.',
      'Memory and speech only.',
      'Vision, judgment and coordination.',
      'Breathing and heart rate.'
    ],
    answer: 2,
    explain: 'Just one drink can affect driving because even a small amount of alcohol affects vision, judgment and coordination.',
    ref: 'Manual p. 25 – Drunk and Drugged Driving'
  },
  // ---- Traffic Crashes (p. 25) ----
  {
    id: 'gB-124', topic: 'Traffic Crashes',
    q: 'Law enforcement must forward a written crash report to DMV when a crash causes injury, death, or total property damage in excess of:',
    options: ['$500.', '$1,000.', '$1,500.', '$3,000.'],
    answer: 3,
    explain: 'Officers must forward a written crash report to DMV when a crash results in injury, death, or total property damage over $3,000.',
    ref: 'Manual p. 25 – Traffic Crashes'
  },
  {
    id: 'gB-125', topic: 'Traffic Crashes',
    q: 'If you damage an unattended vehicle and cannot find the owner, you must leave a note and report the crash to police within:',
    options: ['24 hours.', '48 hours.', '72 hours.', '5 days.'],
    answer: 0,
    explain: 'Leave an easily found note with your name, phone number, date, time and damage description, and report to police within 24 hours.',
    ref: 'Manual p. 25 – Traffic Crashes'
  },
  {
    id: 'gB-126', topic: 'Traffic Crashes',
    q: 'After a minor crash where no one is injured and the vehicles can be moved, the drivers must:',
    options: [
      'Leave the vehicles where they are until police arrive.',
      'Move the vehicles off the road if it is safe to do so.',
      'Leave the scene and report the crash at a later time.',
      'Stay in their vehicles in the travel lanes until help comes.'
    ],
    answer: 1,
    explain: 'Drivers must move vehicles from the road immediately if they can be moved, no one is injured and the driver can do so safely.',
    ref: 'Manual p. 25 – Traffic Crashes'
  },
  {
    id: 'gB-127', topic: 'Traffic Crashes',
    q: 'You should move an injured person from a wrecked vehicle only if:',
    options: [
      'The person asks you to help them get out.',
      'Traffic is blocked and other drivers are waiting.',
      'You have medical training or there is a danger like fire.',
      'Police have not arrived within 10 minutes of the crash.'
    ],
    answer: 2,
    explain: 'Do not move an injured person unless you have the necessary medical training or there is an immediate danger such as fire.',
    ref: 'Manual p. 25 – Traffic Crashes'
  },
  {
    id: 'gB-128', topic: 'Traffic Crashes',
    q: 'After a crash, which information should you get from the other drivers involved?',
    options: [
      'Their employer and job title.',
      'Their date of birth and Social Security number.',
      'Their vehicle\'s purchase price.',
      'Name, address and driver\'s license number.'
    ],
    answer: 3,
    explain: 'Get the name, address and driver\'s license number of other drivers, plus plate numbers, witness information and insurance details.',
    ref: 'Manual p. 25 – Traffic Crashes'
  },
  {
    id: 'gB-129', topic: 'Traffic Crashes',
    q: 'When getting out of your vehicle after a crash, you should:',
    options: [
      'Keep your vehicle between you and moving traffic.',
      'Stand in the travel lane to warn other drivers.',
      'Exit quickly on the side facing oncoming traffic.',
      'Walk across traffic to inspect the other vehicle.'
    ],
    answer: 0,
    explain: 'Be careful when exiting your vehicle; keep your vehicle between you and moving traffic if possible.',
    ref: 'Manual p. 25 – Traffic Crashes'
  },
  // ---- Deer / Large Animals (p. 25) ----
  {
    id: 'gB-130', topic: 'Animal Hazards',
    q: 'If a collision with a deer is unavoidable, you should:',
    options: [
      'Swerve sharply to the left to avoid it.',
      'Brake firmly, stay in your lane and stop.',
      'Speed up to get past it before it moves.',
      'Swerve onto the shoulder and then brake.'
    ],
    answer: 1,
    explain: 'If a collision with a deer is unavoidable, do not swerve. Brake firmly, stay in your lane and come to a controlled stop.',
    ref: 'Manual p. 25 – Deer/Large Animal Hazards'
  },
  {
    id: 'gB-131', topic: 'Animal Hazards',
    q: 'You should be especially alert for deer:',
    options: [
      'At midday, especially in the summer.',
      'At night, but only in the spring.',
      'At dusk and dawn, especially in the fall.',
      'During heavy rain at any time of year.'
    ],
    answer: 2,
    explain: 'Be alert at dusk and dawn, especially in the fall.',
    ref: 'Manual p. 25 – Deer/Large Animal Hazards'
  },
  {
    id: 'gB-132', topic: 'Animal Hazards',
    q: 'You see a deer crossing the road ahead. You should slow down because:',
    options: [
      'Deer always stop in the middle of the road.',
      'Deer are attracted to headlights and horns.',
      'Deer only travel across roads late at night.',
      'Large animals often travel in groups.'
    ],
    answer: 3,
    explain: 'Slow down if you see a large animal near the road; large animals frequently travel in groups and others are likely nearby.',
    ref: 'Manual p. 25 – Deer/Large Animal Hazards'
  },
  {
    id: 'gB-133', topic: 'Animal Hazards',
    q: 'If you hit a large animal such as a deer, you should:',
    options: [
      'Report it to law enforcement.',
      'Drive away if your vehicle still runs.',
      'Report it to DMV within 30 days.',
      'Move the animal off the road yourself.'
    ],
    answer: 0,
    explain: 'If you hit a large animal, report it to law enforcement.',
    ref: 'Manual p. 25 – Deer/Large Animal Hazards'
  },
  // ---- Traffic Stops (p. 26) ----
  {
    id: 'gB-134', topic: 'Traffic Stops',
    q: 'If you are stopped by a police officer, you should:',
    options: [
      'Get out of your vehicle and walk to the officer.',
      'Stay in your vehicle unless the officer asks you to get out.',
      'Search for your documents before the officer arrives.',
      'Keep your engine running.'
    ],
    answer: 1,
    explain: 'Stay in your vehicle and do not get out unless the officer asks you to; turn off the engine and keep hands in view.',
    ref: 'Manual p. 26 – Traffic Stops'
  },
  {
    id: 'gB-135', topic: 'Traffic Stops',
    q: 'If you are pulled over by police at night, you should:',
    options: [
      'Turn on your high beams.',
      'Turn off all lights.',
      'Turn on your vehicle\'s interior lights.',
      'Get out and stand by the vehicle.'
    ],
    answer: 2,
    explain: 'If you are pulled over at night, turn on your vehicle\'s interior lights.',
    ref: 'Manual p. 26 – Traffic Stops'
  },
  {
    id: 'gB-136', topic: 'Traffic Stops',
    q: 'Signing a traffic citation:',
    options: [
      'Is an admission that you are guilty.',
      'Means you give up your right to go to court.',
      'Is optional and refusing has no consequences.',
      'Is not an admission of guilt.'
    ],
    answer: 3,
    explain: 'Sign the citation; this is not an admission of guilt. Refusal to sign may result in your arrest.',
    ref: 'Manual p. 26 – Traffic Stops'
  },
  {
    id: 'gB-137', topic: 'Traffic Stops',
    q: 'During a traffic stop, where should you keep your hands?',
    options: [
      'In plain view, preferably on the steering wheel.',
      'In your lap.',
      'On the gear shift.',
      'Reaching for your documents in the glove box.'
    ],
    answer: 0,
    explain: 'Keep your hands in plain view, preferably on the steering wheel, and ask passengers to keep theirs in view too.',
    ref: 'Manual p. 26 – Traffic Stops'
  },
  {
    id: 'gB-138', topic: 'Traffic Stops',
    q: 'If an officer stopping you is in an unmarked car or not in uniform, you:',
    options: [
      'Must drive to the nearest police station first.',
      'May ask to see the officer\'s identification.',
      'Do not have to stop.',
      'Should get out and approach the officer.'
    ],
    answer: 1,
    explain: 'If the officer is driving an unmarked car or is not in uniform, you may ask to see his or her identification.',
    ref: 'Manual p. 26 – Traffic Stops'
  },
  {
    id: 'gB-139', topic: 'Traffic Stops',
    q: 'If you disagree with the officer during a traffic stop, you should:',
    options: [
      'Argue your point of view with the officer.',
      'Refuse to sign the citation you are given.',
      'Not discuss it then; make your case in court.',
      'Drive away and call the police department.'
    ],
    answer: 2,
    explain: 'If you disagree, do not discuss your point of view at that time; you will have your chance to make your case in court.',
    ref: 'Manual p. 26 – Traffic Stops'
  }
]);
