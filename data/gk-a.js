window.VA = window.VA || {};

// General knowledge bank A — Manual printed pages 5–18
// (Section 2: Signals, Signs and Pavement Markings; Section 3: Safe Driving through Turn Signals).
window.VA.generalQuestions = (window.VA.generalQuestions || []).concat([
  // ---------------- Traffic Signals (p. 5–6) ----------------
  {
    id: 'gA-001',
    topic: 'Traffic Signals',
    q: 'At a steady red light with a stop line, you must:',
    options: [
      'Slow down and proceed if no traffic is coming.',
      'Come to a complete stop at the stop line.',
      'Stop just past the stop line so you can see better.',
      'Stop only if pedestrians are in the crosswalk.'
    ],
    answer: 1,
    explain: 'At a red light, come to a complete stop at the stop line or, if there is no stop line, before entering the intersection or reaching the crosswalk.',
    ref: 'Manual p. 5 – Traffic Signals'
  },
  {
    id: 'gA-002',
    topic: 'Traffic Signals',
    q: 'In Virginia, you may turn right on a steady red light:',
    options: [
      'Only when a green arrow is also displayed.',
      'Never; right turns on red are illegal in Virginia.',
      'After coming to a complete stop and yielding, unless a sign or red arrow prohibits it.',
      'Without stopping, as long as no vehicles are approaching.'
    ],
    answer: 2,
    explain: 'You may turn right on red after a complete stop, looking both ways and yielding, unless "No Turn on Red" is posted or a red right arrow is displayed.',
    ref: 'Manual p. 5 – Traffic Signals'
  },
  {
    id: 'gA-003',
    topic: 'Traffic Signals',
    q: 'A left turn on a steady red light is permitted in Virginia when:',
    options: [
      'You are turning from a one-way street onto another one-way street after a complete stop.',
      'You are turning from a two-way street onto a one-way street.',
      'No oncoming traffic is visible from either direction.',
      'You are in the leftmost lane of any multi-lane road.'
    ],
    answer: 0,
    explain: 'You may turn left on red only from a one-way street onto another one-way street, after a complete stop and yielding, unless a sign or red left arrow prohibits it.',
    ref: 'Manual p. 5 – Traffic Signals'
  },
  {
    id: 'gA-004',
    topic: 'Traffic Signals',
    q: 'A steady red arrow means:',
    options: [
      'You may turn in the direction of the arrow after yielding.',
      'The signal is about to turn green.',
      'Slow down and proceed with caution in the direction of the arrow.',
      'Stop and do not go in the direction of the arrow while it is displayed.'
    ],
    answer: 3,
    explain: 'You may not proceed in the direction of a red arrow unless a sign such as "Right on Red Arrow After Stop" is posted; Virginia law prohibits turns at red arrows.',
    ref: 'Manual p. 5 – Traffic Signals'
  },
  {
    id: 'gA-005',
    topic: 'Traffic Signals',
    q: 'Turning on a red arrow in Virginia is allowed only when:',
    options: [
      'No pedestrians are in the crosswalk.',
      'A sign reads "Right on Red Arrow After Stop" or "Left on Red Arrow After Stop."',
      'You have come to a complete stop and the way is clear.',
      'The arrow is pointing to the right.'
    ],
    answer: 1,
    explain: 'Virginia law prohibits turns at red arrows unless signs posted at the intersection read "Right on Red Arrow After Stop" or "Left on Red Arrow After Stop."',
    ref: 'Manual p. 5 – Traffic Signals'
  },
  {
    id: 'gA-006',
    topic: 'Traffic Signals',
    q: 'At a flashing red light, you must:',
    options: [
      'Slow down and proceed with caution without stopping.',
      'Stop only if cross traffic is present.',
      'Come to a complete stop, yield, and go when the way is clear.',
      'Wait until the light turns green before moving.'
    ],
    answer: 2,
    explain: 'At a flashing red light, come to a complete stop and yield to oncoming vehicles and pedestrians; you may go when the way is clear.',
    ref: 'Manual p. 5 – Traffic Signals'
  },
  {
    id: 'gA-007',
    topic: 'Traffic Signals',
    q: 'At a railroad crossing with a flashing red light, you must:',
    options: [
      'Come to a complete stop even if you do not see a train.',
      'Stop only if you can see or hear a train.',
      'Slow down and cross if the tracks look clear.',
      'Stop only if the crossing has gates.'
    ],
    answer: 0,
    explain: 'At a railroad crossing with a flashing red light, you must come to a complete stop even if you don\'t see a train.',
    ref: 'Manual p. 5 – Traffic Signals'
  },
  {
    id: 'gA-008',
    topic: 'Traffic Signals',
    q: 'When a steady yellow light appears and you have not yet entered the intersection, you should:',
    options: [
      'Speed up to get through before the light turns red.',
      'Stop if it is safe to do so; if unsafe to stop, go through cautiously.',
      'Stop immediately, even if you are already in the intersection.',
      'Continue at the same speed because yellow means go.'
    ],
    answer: 1,
    explain: 'A yellow light warns the light is about to change. If you have not entered the intersection, stop; if unsafe to stop, cautiously go through. Do not speed up to beat the light.',
    ref: 'Manual p. 5 – Traffic Signals'
  },
  {
    id: 'gA-009',
    topic: 'Traffic Signals',
    q: 'If the light turns yellow while you are already in the intersection, you should:',
    options: [
      'Stop where you are and wait for the next green.',
      'Back up behind the stop line.',
      'Speed up to clear the intersection before it turns red.',
      'Go through the intersection cautiously.'
    ],
    answer: 3,
    explain: 'If you are already in the intersection when the light turns yellow, go through it cautiously; do not speed up to beat the light.',
    ref: 'Manual p. 5 – Traffic Signals'
  },
  {
    id: 'gA-010',
    topic: 'Traffic Signals',
    q: 'A flashing yellow light means:',
    options: [
      'Slow down and proceed with caution.',
      'Come to a complete stop, then proceed.',
      'The light is about to turn red.',
      'The signal is out of service; treat it as an all-way stop.'
    ],
    answer: 0,
    explain: 'A flashing yellow light means slow down and proceed with caution; they are placed at locations with higher-than-normal hazardous conditions.',
    ref: 'Manual p. 5 – Traffic Signals'
  },
  {
    id: 'gA-011',
    topic: 'Traffic Signals',
    q: 'At a flashing yellow arrow, you may turn in the direction of the arrow:',
    options: [
      'Only after coming to a complete stop.',
      'Because you have the right-of-way over oncoming traffic.',
      'If the way is clear, yielding to oncoming vehicles and pedestrians.',
      'Only if no pedestrians are waiting at the corner.'
    ],
    answer: 2,
    explain: 'At a flashing yellow arrow you may turn if the way is clear, yielding to vehicles coming from the other direction and pedestrians in the intersection.',
    ref: 'Manual p. 5 – Traffic Signals'
  },
  {
    id: 'gA-012',
    topic: 'Traffic Signals',
    q: 'At a flashing red arrow, you must:',
    options: [
      'Slow down and turn without stopping if the way is clear.',
      'Remain stopped until the arrow turns green.',
      'Turn immediately because turning traffic has priority.',
      'Come to a complete stop, yield, then turn in the direction of the arrow when clear.'
    ],
    answer: 3,
    explain: 'At a flashing red arrow, come to a complete stop, yield to oncoming vehicles and pedestrians in the intersection, and proceed in the direction of the arrow when the way is clear.',
    ref: 'Manual p. 5 – Traffic Signals'
  },
  {
    id: 'gA-013',
    topic: 'Traffic Signals',
    q: 'You are turning left on a green light with no green arrow. You must:',
    options: [
      'Yield to oncoming vehicles and pedestrians in the intersection.',
      'Turn first, because left-turning vehicles have the right-of-way.',
      'Wait until the light turns yellow, then turn.',
      'Sound your horn to warn oncoming traffic, then turn.'
    ],
    answer: 0,
    explain: 'If you are turning without a green arrow, you must yield the right-of-way to vehicles coming from the other direction and pedestrians in the intersection.',
    ref: 'Manual p. 6 – Traffic Signals'
  },
  {
    id: 'gA-014',
    topic: 'Traffic Signals',
    q: 'The light changes from red to green while a pedestrian is still in the street. You should:',
    options: [
      'Proceed with your turn because the light is green.',
      'Allow the pedestrian to finish crossing before turning.',
      'Sound your horn so the pedestrian hurries.',
      'Drive around the pedestrian carefully.'
    ],
    answer: 1,
    explain: 'If a traffic light changes from red to green while a pedestrian is in the street, allow the pedestrian to cross the street before turning.',
    ref: 'Manual p. 6 – Traffic Signals'
  },
  {
    id: 'gA-015',
    topic: 'Traffic Signals',
    q: 'If traffic signals are not working and display no lights, and no officer is directing traffic, you must:',
    options: [
      'Proceed with caution as if the signal were green.',
      'Yield only to vehicles on your left.',
      'Stop and proceed as though the intersection were an all-way stop.',
      'Slow down and treat it as a yield sign.'
    ],
    answer: 2,
    explain: 'When signals are out of service and not displaying any lights, you must stop and proceed through the intersection as though it were an all-way stop.',
    ref: 'Manual p. 6 – Traffic Signals'
  },
  {
    id: 'gA-016',
    topic: 'Traffic Signals',
    q: 'A red X lane use signal above a lane means:',
    options: [
      'You may use the lane only to turn left.',
      'Move out of the lane as soon as safely possible.',
      'The lane is reserved for high occupancy vehicles.',
      'Never drive in that lane.'
    ],
    answer: 3,
    explain: 'Never drive in a lane marked with a red X signal.',
    ref: 'Manual p. 6 – Traffic Signals'
  },
  {
    id: 'gA-017',
    topic: 'Traffic Signals',
    q: 'A yellow X or yellow diagonal downward arrow lane use signal means:',
    options: [
      'Move out of the lane as soon as safely possible.',
      'You may drive in the lane.',
      'The lane is open only for turning.',
      'Slow down; the lane ahead is under construction.'
    ],
    answer: 0,
    explain: 'A yellow X or yellow diagonal downward arrow means you should move out of the lane as soon as safely possible.',
    ref: 'Manual p. 6 – Traffic Signals'
  },
  {
    id: 'gA-018',
    topic: 'Traffic Signals',
    q: 'A lane marked with a one-way or two-way left-turn arrow signal may be entered:',
    options: [
      'Only for passing slower vehicles.',
      'Only to turn in the direction of the arrow.',
      'By any vehicle during off-peak hours.',
      'Only by buses and emergency vehicles.'
    ],
    answer: 1,
    explain: 'You are permitted to enter a lane marked with a one-way or two-way left-turn arrow only to turn in the direction of the arrow.',
    ref: 'Manual p. 6 – Traffic Signals'
  },
  {
    id: 'gA-019',
    topic: 'Traffic Signals',
    q: 'When the two red lights of a Pedestrian Hybrid Beacon (PHB) turn solid, drivers must:',
    options: [
      'Slow down and proceed with caution.',
      'Proceed if the crosswalk is clear.',
      'Stop.',
      'Prepare to stop.'
    ],
    answer: 2,
    explain: 'When the top two red lights on a PHB turn solid while a walk signal appears at the crosswalk, drivers must stop.',
    ref: 'Manual p. 6 – Traffic Signals'
  },
  {
    id: 'gA-020',
    topic: 'Traffic Signals',
    q: 'When the two red lights of a Pedestrian Hybrid Beacon alternate flashing, a driver:',
    options: [
      'Must remain stopped until the beacon goes dark.',
      'Should prepare to stop because a pedestrian is about to cross.',
      'Must stop only if traffic from the right is present.',
      'May proceed with caution if the crosswalk is clear.'
    ],
    answer: 3,
    explain: 'While the walk signal counts down, the PHB\'s two red lights alternate flashing, telling drivers they may proceed with caution if the crosswalk is clear.',
    ref: 'Manual p. 6 – Traffic Signals'
  },
  {
    id: 'gA-021',
    topic: 'Traffic Signals',
    q: 'Unless a police officer is directing traffic, traffic signals apply to:',
    options: [
      'Drivers, motorcycle riders, bicyclists, moped riders and pedestrians.',
      'Motor vehicles only.',
      'Cars and trucks, but not bicycles or mopeds.',
      'Drivers only; pedestrians follow separate rules.'
    ],
    answer: 0,
    explain: 'Traffic signals apply to drivers, motorcycle riders, bicyclists, moped riders and pedestrians. Always follow a police officer\'s directions over signs and signals.',
    ref: 'Manual p. 5 – Traffic Signals'
  },
  {
    id: 'gA-022',
    topic: 'Traffic Signals',
    q: 'To avoid waiting at a red light, a driver cuts through a corner gas station parking lot. This is:',
    options: [
      'Legal if the driver does not exceed 15 MPH.',
      'Legal as long as the driver does not stop in the lot.',
      'Illegal; you may not avoid traffic controls by cutting through a parking lot.',
      'Legal only during business hours.'
    ],
    answer: 2,
    explain: 'It is illegal to avoid traffic controls by cutting through a parking lot or field.',
    ref: 'Manual p. 5 – Section 2: Signals, Signs and Pavement Markings'
  },

  // ---------------- Sign Colors and Shapes (p. 6–7) ----------------
  {
    id: 'gA-023',
    topic: 'Sign Colors and Shapes',
    q: 'Yellow signs with black lettering or symbols convey:',
    options: [
      'Regulatory information.',
      'A warning.',
      'Motorist services.',
      'Destination information.'
    ],
    answer: 1,
    explain: 'Yellow used with black conveys a warning, such as curve ahead, stop ahead, or slippery when wet.',
    ref: 'Manual p. 6 – Sign Colors'
  },
  {
    id: 'gA-024',
    topic: 'Sign Colors and Shapes',
    q: 'Red used with white on a sign conveys:',
    options: [
      'Stop, yield, do not, and no.',
      'Construction zone information.',
      'Historical or cultural interests.',
      'Warnings about curves and hills.'
    ],
    answer: 0,
    explain: 'Red used with white conveys stop, yield, do not, and no — for example stop, yield, do not enter and wrong way signs.',
    ref: 'Manual p. 6 – Sign Colors'
  },
  {
    id: 'gA-025',
    topic: 'Sign Colors and Shapes',
    q: 'Blue and white signs are used to give information about:',
    options: [
      'Historical or cultural sites.',
      'Destinations and distances.',
      'Construction areas.',
      'Motorist services.'
    ],
    answer: 3,
    explain: 'Green signs give destination information, blue signs inform regarding motorist services, and brown signs advise of historical or cultural interests.',
    ref: 'Manual p. 6 – Sign Colors'
  },
  {
    id: 'gA-026',
    topic: 'Sign Colors and Shapes',
    q: 'Brown and white signs advise of:',
    options: [
      'Motorist services such as gas and food.',
      'School zones.',
      'Historical or cultural interests in the area.',
      'Incident areas.'
    ],
    answer: 2,
    explain: 'The brown sign is used to advise of historical or cultural interests that might exist in the area.',
    ref: 'Manual p. 6 – Sign Colors'
  },
  {
    id: 'gA-027',
    topic: 'Sign Colors and Shapes',
    q: 'Pink and black signs are used to warn drivers in:',
    options: [
      'School zones.',
      'Incident areas.',
      'Construction areas.',
      'Recreational areas.'
    ],
    answer: 1,
    explain: 'Orange and black signs are used in construction areas, and pink and black signs are used in incident areas.',
    ref: 'Manual p. 6 – Sign Colors'
  },
  {
    id: 'gA-028',
    topic: 'Sign Colors and Shapes',
    q: 'A strong yellow-green sign with black symbols advises of:',
    options: [
      'School zone, pedestrian and/or bicyclist activity.',
      'Construction work ahead.',
      'Rest areas and motorist services.',
      'Scenic routes.'
    ],
    answer: 0,
    explain: 'A specialized class of warning signs uses a strong yellow/green color with black to advise of school zone, pedestrian and/or bicyclist activities.',
    ref: 'Manual p. 6 – Sign Colors'
  },
  {
    id: 'gA-029',
    topic: 'Sign Colors and Shapes',
    q: 'Black and white signs, such as speed limit and no turn signs, convey:',
    options: [
      'Warnings of hazards ahead.',
      'Helpful travel information.',
      'Construction detours.',
      'Regulatory information.'
    ],
    answer: 3,
    explain: 'Black used with white conveys regulatory information — operation regulated by law, such as speed limit, do not pass and no turns.',
    ref: 'Manual p. 6 – Sign Colors'
  },
  {
    id: 'gA-030',
    topic: 'Sign Colors and Shapes',
    q: 'In heavy fog you may only be able to make out a sign\'s:',
    options: [
      'Message.',
      'Symbol.',
      'Shape.',
      'Reflective border.'
    ],
    answer: 2,
    explain: 'In poor visibility conditions, such as heavy fog, you may be able to make out only the shape of a sign.',
    ref: 'Manual p. 6 – Traffic Signs'
  },
  {
    id: 'gA-031',
    topic: 'Sign Colors and Shapes',
    q: 'An eight-sided (octagon) sign always means:',
    options: [
      'Stop.',
      'Yield.',
      'School zone.',
      'Railroad crossing.'
    ],
    answer: 0,
    explain: 'The octagon is an eight-sided shape that always means stop.',
    ref: 'Manual p. 7 – Sign Shapes'
  },
  {
    id: 'gA-032',
    topic: 'Sign Colors and Shapes',
    q: 'A five-sided (pentagon) sign marks:',
    options: [
      'A no passing zone.',
      'A school zone or school crossing.',
      'A railroad crossing.',
      'A warning of road conditions ahead.'
    ],
    answer: 1,
    explain: 'The pentagon is a five-sided shape that marks school zones and warns you about school crossings.',
    ref: 'Manual p. 7 – Sign Shapes'
  },
  {
    id: 'gA-033',
    topic: 'Sign Colors and Shapes',
    q: 'Diamond-shaped signs:',
    options: [
      'Give directions to destinations.',
      'Mark the beginning of school zones.',
      'Tell you the law you must obey.',
      'Warn of special conditions or hazards ahead.'
    ],
    answer: 3,
    explain: 'Diamond-shaped warning signs warn you of special conditions or hazards ahead. Slow down, drive with caution, and be ready to stop.',
    ref: 'Manual p. 7 – Sign Shapes'
  },
  {
    id: 'gA-034',
    topic: 'Sign Colors and Shapes',
    q: 'Vertical rectangular signs generally:',
    options: [
      'Warn of hazards ahead.',
      'Give directions to nearby towns.',
      'Give instructions or tell you the law.',
      'Mark school crossings.'
    ],
    answer: 2,
    explain: 'Vertical rectangle signs generally give instructions or tell you the law; horizontal signs may give directions or information.',
    ref: 'Manual p. 7 – Sign Shapes'
  },
  {
    id: 'gA-035',
    topic: 'Sign Colors and Shapes',
    q: 'At a yield sign (triangle), you must:',
    options: [
      'Slow down, be prepared to stop, and let vehicles, pedestrians or bicyclists pass before proceeding.',
      'Come to a complete stop every time.',
      'Maintain your speed; other drivers must yield to you.',
      'Stop only if a vehicle is approaching from the left.'
    ],
    answer: 0,
    explain: 'At a yield sign, slow down as you come to the intersection, be prepared to stop, and let any vehicles, pedestrians or bicyclists safely pass before you proceed.',
    ref: 'Manual p. 7 – Sign Shapes'
  },
  {
    id: 'gA-036',
    topic: 'Sign Colors and Shapes',
    q: 'At an all-way (4-way) stop, two vehicles arrive at the same time. Who must yield?',
    options: [
      'The driver on the right must yield to the driver on the left.',
      'The driver on the left must yield to the driver on the right.',
      'The driver going straight must yield to the driver turning.',
      'The larger vehicle must yield to the smaller vehicle.'
    ],
    answer: 1,
    explain: 'If you get to an all-way stop at the same time as other vehicles, the driver on the left must yield to the driver on the right.',
    ref: 'Manual p. 7 – Sign Shapes'
  },
  {
    id: 'gA-037',
    topic: 'Sign Colors and Shapes',
    q: 'A red circle with a slash on a regulatory sign means:',
    options: [
      'Proceed with caution.',
      'The road is closed ahead.',
      'Yield to the action shown inside the circle.',
      'No; the symbol inside shows what is prohibited.'
    ],
    answer: 3,
    explain: 'A red circle with a slash means NO — the symbol inside the circle tells you what is prohibited.',
    ref: 'Manual p. 7 – Regulatory Signs'
  },
  {
    id: 'gA-038',
    topic: 'Sign Colors and Shapes',
    q: 'You are driving at the posted speed limit during heavy rain. You:',
    options: [
      'Cannot be ticketed because you are within the posted limit.',
      'May be ticketed for driving too fast for conditions.',
      'Must drive exactly 10 MPH under the limit.',
      'May drive 5 MPH over the limit because traffic is light.'
    ],
    answer: 1,
    explain: 'Speed limit signs give the maximum speed when weather is good. During rain, snow and ice, you may be ticketed for driving too fast for conditions even at or below the posted limit.',
    ref: 'Manual p. 7 – Regulatory Signs'
  },
  {
    id: 'gA-039',
    topic: 'Sign Colors and Shapes',
    q: 'In Virginia, if a No Left Turn sign is posted, a U-turn at that location is:',
    options: [
      'Legal if no traffic is approaching.',
      'Legal only during daylight hours.',
      'Illegal, because a U-turn is considered two left turns.',
      'Legal for passenger vehicles only.'
    ],
    answer: 2,
    explain: 'In Virginia, U-turns are considered two left turns and are illegal if a No Left Turn sign is posted.',
    ref: 'Manual p. 7 – Regulatory Signs'
  },
  {
    id: 'gA-040',
    topic: 'Sign Colors and Shapes',
    q: 'A Left Turn Yield on Green sign means that when the light is green, left-turning traffic:',
    options: [
      'Has the right-of-way over oncoming traffic.',
      'Must wait for a green arrow.',
      'Must not turn left at all.',
      'Must yield to traffic coming from the other direction.'
    ],
    answer: 3,
    explain: 'Left Turn Yield on Green tells you that traffic turning left at a green light does not have the right-of-way and must yield to oncoming traffic.',
    ref: 'Manual p. 7 – Regulatory Signs'
  },
  {
    id: 'gA-041',
    topic: 'Sign Colors and Shapes',
    q: 'If you realize you have driven past a Do Not Enter or Wrong Way sign, you should:',
    options: [
      'Immediately slow down, pull over, and cautiously turn around.',
      'Continue to the next exit and turn around there.',
      'Speed up to get off the road quickly.',
      'Turn on your hazard lights and keep driving in the left lane.'
    ],
    answer: 0,
    explain: 'If you drive past these signs you are going the wrong direction and could have a head-on crash. Immediately slow down, pull over, and cautiously turn around.',
    ref: 'Manual p. 7 – Regulatory Signs'
  },

  // ---------------- Railroad Crossings (p. 9–10) ----------------
  {
    id: 'gA-042',
    topic: 'Railroad Crossings',
    q: 'At a railroad crossing with flashing lights and a gate, you must:',
    options: [
      'Drive around the gate if no train is visible.',
      'Stop when the lights begin to flash and remain stopped until the gates rise and the lights stop flashing.',
      'Stop only after the gate is fully lowered.',
      'Slow down and cross quickly before the gate lowers.'
    ],
    answer: 1,
    explain: 'Stop when the lights begin to flash and before the gate lowers. Remain stopped until the gates are raised and the lights stop flashing. Never drive around a lowered gate.',
    ref: 'Manual p. 9 – Railroad Crossings'
  },
  {
    id: 'gA-043',
    topic: 'Railroad Crossings',
    q: 'If your car stalls on railroad tracks, you should:',
    options: [
      'Stay in the car and try to restart it.',
      'Get out and push the car off the tracks.',
      'Get out right away and run diagonally away from the tracks in the direction of the oncoming train.',
      'Get out and run along the tracks away from the train.'
    ],
    answer: 2,
    explain: 'If your car stalls on the tracks, get out right away and run diagonally away from the tracks in the direction of the oncoming train.',
    ref: 'Manual p. 10 – Railroad Crossings'
  },
  {
    id: 'gA-044',
    topic: 'Railroad Crossings',
    q: 'Before starting across railroad tracks, you should make sure:',
    options: [
      'Your radio is on so you can hear warnings.',
      'You have enough speed to cross quickly.',
      'The vehicle ahead has already reached the tracks.',
      'There is room for your vehicle on the other side of the tracks.'
    ],
    answer: 3,
    explain: 'Unless you can clear the tracks completely, never start across. Make sure there is room for your vehicle on the other side before proceeding.',
    ref: 'Manual p. 10 – Railroad Crossings'
  },
  {
    id: 'gA-045',
    topic: 'Railroad Crossings',
    q: 'School buses must stop at railroad crossings:',
    options: [
      'Always, even when the lights are not flashing.',
      'Only when the lights are flashing.',
      'Only when carrying children.',
      'Only when a gate is present.'
    ],
    answer: 0,
    explain: 'School buses must always stop at railroad crossings, even when the lights are not flashing.',
    ref: 'Manual p. 10 – Railroad Crossings'
  },
  {
    id: 'gA-046',
    topic: 'Railroad Crossings',
    q: 'If a dangerous condition exists at a railroad crossing, you should:',
    options: [
      'Call 911 and wait at the crossing.',
      'Call the number on the emergency sign and give the posted crossing number.',
      'Place flares on the tracks.',
      'Report it at the nearest DMV office.'
    ],
    answer: 1,
    explain: 'Call the number listed on the emergency sign so the rail company can stop or reroute trains, and give the posted crossing number so the hazard can be identified.',
    ref: 'Manual p. 10 – Railroad Crossings'
  },
  {
    id: 'gA-047',
    topic: 'Railroad Crossings',
    q: 'At a multi-track railroad crossing, after one train passes you should:',
    options: [
      'Cross immediately, since the train has cleared.',
      'Cross as soon as the gate begins to rise.',
      'Be alert for a second train approaching from the opposite direction.',
      'Sound your horn and proceed.'
    ],
    answer: 2,
    explain: 'Be especially alert at multi-track crossings because a second train could be approaching from the opposite direction. Do not proceed until the tracks are clear and lights stop flashing.',
    ref: 'Manual p. 9 – Railroad Crossings'
  },

  // ---------------- Work Zones (p. 10–11) ----------------
  {
    id: 'gA-048',
    topic: 'Work Zones',
    q: 'If you are convicted of exceeding the speed limit in a highway work zone, you may be fined up to:',
    options: [
      '$100.',
      '$250.',
      '$1,000.',
      '$500.'
    ],
    answer: 3,
    explain: 'If you are convicted of exceeding the speed limit in a highway work zone, you may be fined up to $500.',
    ref: 'Manual p. 10 – Work Zones'
  },
  {
    id: 'gA-049',
    topic: 'Work Zones',
    q: 'The fine for being convicted of using a handheld communications device in a highway work zone is:',
    options: [
      '$250.',
      '$125.',
      '$500.',
      '$100.'
    ],
    answer: 0,
    explain: 'If you are convicted of using a handheld communications device in a highway work zone, you will be fined $250.',
    ref: 'Manual p. 10 – Work Zones'
  },
  {
    id: 'gA-050',
    topic: 'Work Zones',
    q: 'When leaving a work zone marked with cones and barrels, you should:',
    options: [
      'Change lanes right away to pass slower traffic.',
      'Stay in your lane and not change lanes until completely clear of the work zone.',
      'Accelerate quickly to make up lost time.',
      'Move onto the shoulder to let traffic pass.'
    ],
    answer: 1,
    explain: 'As you leave the work zone, stay in your lane and maintain your speed. Don\'t change lanes until you are completely clear of the work zone.',
    ref: 'Manual p. 10 – Work Zones'
  },
  {
    id: 'gA-051',
    topic: 'Work Zones',
    q: 'Rumble strips placed across the travel lanes before a work zone should be:',
    options: [
      'Swerved around to protect your tires.',
      'Driven over quickly.',
      'Driven over slowly, not swerved around.',
      'Avoided by using the shoulder.'
    ],
    answer: 2,
    explain: 'Rumble strips should be slowly driven over, not swerved around.',
    ref: 'Manual p. 11 – Work Zones'
  },
  {
    id: 'gA-052',
    topic: 'Work Zones',
    q: 'A slow moving vehicle emblem must be displayed on vehicles that travel at:',
    options: [
      '35 MPH or less.',
      '15 MPH or less.',
      '45 MPH or less.',
      '25 MPH or less.'
    ],
    answer: 3,
    explain: 'Slow moving vehicles traveling at 25 MPH or less, such as farm equipment or horse-drawn vehicles, must display these signs on a public highway.',
    ref: 'Manual p. 11 – Slow Moving Vehicles'
  },
  {
    id: 'gA-053',
    topic: 'Work Zones',
    q: 'Flaggers in a work zone normally use:',
    options: [
      'STOP/SLOW paddles or red flags.',
      'Green and yellow flags.',
      'Hand signals only.',
      'Flashlights with blue lenses.'
    ],
    answer: 0,
    explain: 'Flaggers use STOP/SLOW paddles or red flags to stop or direct traffic through the work zone.',
    ref: 'Manual p. 10 – Work Zones'
  },

  // ---------------- Pavement Markings (p. 11–12) ----------------
  {
    id: 'gA-054',
    topic: 'Pavement Markings',
    q: 'Yellow center lines on a road mean:',
    options: [
      'Traffic is flowing in the same direction.',
      'Two-way traffic is flowing in opposite directions.',
      'The lane is reserved for buses.',
      'The road edge is near.'
    ],
    answer: 1,
    explain: 'Yellow center lines mean two-way traffic, flowing in opposite directions.',
    ref: 'Manual p. 11 – Pavement Markings'
  },
  {
    id: 'gA-055',
    topic: 'Pavement Markings',
    q: 'A broken yellow center line means:',
    options: [
      'Passing is not allowed in either direction.',
      'Passing is allowed only for traffic on the right side.',
      'Passing on the left is allowed in either direction when the way ahead is clear.',
      'The center lane is for left turns only.'
    ],
    answer: 2,
    explain: 'Broken yellow center lines mean that passing on the left is allowed in either direction when the way ahead is clear.',
    ref: 'Manual p. 11 – Pavement Markings'
  },
  {
    id: 'gA-056',
    topic: 'Pavement Markings',
    q: 'When a broken yellow line is alongside a solid yellow line, passing is allowed:',
    options: [
      'From either side.',
      'From neither side.',
      'From the side of the solid line only.',
      'From the side of the broken line only.'
    ],
    answer: 3,
    explain: 'Passing is allowed from the side of the broken line, but not from the side of the solid line.',
    ref: 'Manual p. 11 – Pavement Markings'
  },
  {
    id: 'gA-057',
    topic: 'Pavement Markings',
    q: 'You may cross double solid yellow center lines only to:',
    options: [
      'Make a left turn or pass pedestrians, bicyclists, or scooter or skateboard riders when safe.',
      'Pass a slow-moving car when the way ahead is clear.',
      'Pass any vehicle traveling below the speed limit.',
      'Make a U-turn in the middle of the block.'
    ],
    answer: 0,
    explain: 'Passing is not allowed across double solid yellow lines; you may cross only to turn left or to pass pedestrians, bicyclists, and scooter or skateboard riders when the opposite lane is clear and it is safe.',
    ref: 'Manual p. 11 – Pavement Markings'
  },
  {
    id: 'gA-058',
    topic: 'Pavement Markings',
    q: 'Broken white lines separate:',
    options: [
      'Traffic going in opposite directions.',
      'Lanes of traffic going in the same direction.',
      'The road from the shoulder.',
      'HOV lanes from regular lanes.'
    ],
    answer: 1,
    explain: 'Broken white lines separate lanes of traffic going in the same direction; you may change lanes with caution.',
    ref: 'Manual p. 11 – Pavement Markings'
  },
  {
    id: 'gA-059',
    topic: 'Pavement Markings',
    q: 'Red reflectors on the pavement indicate:',
    options: [
      'A no parking zone.',
      'A fire lane.',
      'Areas not to be entered or used; you may be facing the wrong direction.',
      'The center of a two-lane road.'
    ],
    answer: 2,
    explain: 'Red reflectors show areas not to be entered or used; they are positioned so that only traffic flowing in the wrong direction would see them.',
    ref: 'Manual p. 11 – Pavement Markings'
  },
  {
    id: 'gA-060',
    topic: 'Pavement Markings',
    q: 'On an unmarked two-lane road in Virginia, you may pass a slow-moving vehicle:',
    options: [
      'Never, because there are no lane markings.',
      'On the right side if the shoulder is paved.',
      'Only if the vehicle is going under 25 MPH.',
      'On the left side if no signs prohibit passing and the way is clear.'
    ],
    answer: 3,
    explain: 'On an unmarked two-lane road, you may pass a slow moving vehicle on the left if there are no signs prohibiting passing and the way is clear.',
    ref: 'Manual p. 11 – Pavement Markings'
  },
  {
    id: 'gA-061',
    topic: 'Pavement Markings',
    q: 'Dotted white lines (closely spaced small rectangles) are used to:',
    options: [
      'Guide lanes through intersections and mark entrance/exit lanes at interchanges.',
      'Mark the right edge of the pavement.',
      'Separate opposing lanes of traffic.',
      'Show where passing is prohibited.'
    ],
    answer: 0,
    explain: 'Dotted white lines show lane assignment in intersections and interchanges, guide turning lanes, and denote turn lane openings and entrance/exit lanes.',
    ref: 'Manual p. 11 – Pavement Markings'
  },
  {
    id: 'gA-062',
    topic: 'Pavement Markings',
    q: 'Solid white lines are used to:',
    options: [
      'Separate traffic moving in opposite directions.',
      'Discourage lane changes and mark the right edge of the pavement.',
      'Allow passing on the left.',
      'Mark lanes reserved for left turns from both directions.'
    ],
    answer: 1,
    explain: 'Solid white lines show turn lanes, discourage lane changes where they might be dangerous, and mark the right edge of the pavement.',
    ref: 'Manual p. 12 – Pavement Markings'
  },
  {
    id: 'gA-063',
    topic: 'Pavement Markings',
    q: 'Your lane is marked with both a curved arrow and a straight arrow. You:',
    options: [
      'Must turn in the direction of the curved arrow.',
      'Must go straight.',
      'May turn or go straight.',
      'May only make a U-turn.'
    ],
    answer: 2,
    explain: 'If your lane has both a curved and straight arrow, you may turn or go straight; a curved arrow alone (or with ONLY) means you must turn.',
    ref: 'Manual p. 12 – Pavement Markings'
  },
  {
    id: 'gA-064',
    topic: 'Pavement Markings',
    q: 'A line of triangles extending across the roadway, often seen at the entrance to a roundabout, is a:',
    options: [
      'Speed bump warning.',
      'Stop line.',
      'Crosswalk marking.',
      'Yield line.'
    ],
    answer: 3,
    explain: 'A yield line is a line of triangles across the roadway showing where you must yield or stop if necessary; it is often seen at roundabout entrances.',
    ref: 'Manual p. 12 – Pavement Markings'
  },
  {
    id: 'gA-065',
    topic: 'Pavement Markings',
    q: 'Double solid white lines that separate an HOV lane from other lanes mean:',
    options: [
      'You may not cross them; enter the special use lane only where signs and markings allow.',
      'You may cross them with caution.',
      'You may cross them only to pass.',
      'Traffic on each side moves in opposite directions.'
    ],
    answer: 0,
    explain: 'Double solid white lines separate same-direction lanes, often HOV lanes. You may not cross them and may enter the special use lane only where signs and markings allow.',
    ref: 'Manual p. 12 – Pavement Markings'
  },
  {
    id: 'gA-066',
    topic: 'Pavement Markings',
    q: 'When using a center lane marked on both sides by a solid yellow line and a broken yellow line for a left turn, you may not travel in it further than:',
    options: [
      '100 feet.',
      '150 feet.',
      '200 feet.',
      '500 feet.'
    ],
    answer: 1,
    explain: 'Drivers in either direction may use this center lane for left turns but may not travel further than 150 feet in it.',
    ref: 'Manual p. 12 – Pavement Markings'
  },
  {
    id: 'gA-067',
    topic: 'Pavement Markings',
    q: 'On a three-lane road, a center lane marked by a single broken yellow line on both sides may be used by drivers in either direction for:',
    options: [
      'Left turns only.',
      'Parking.',
      'Passing.',
      'Emergency vehicles only.'
    ],
    answer: 2,
    explain: 'If the center lane is marked by a single broken yellow line on both sides, drivers traveling in either direction may use it for passing.',
    ref: 'Manual p. 12 – Pavement Markings'
  },
  {
    id: 'gA-068',
    topic: 'Pavement Markings',
    q: 'A shared lane marking (sharrow) shows a bicycle symbol with a double chevron. It means:',
    options: [
      'Bicycles are prohibited in the lane.',
      'The lane is a bicycle-only lane.',
      'Drivers may pass bicycles without slowing.',
      'Expect bicyclists in the lane; it is too narrow to share side by side.'
    ],
    answer: 3,
    explain: 'Sharrows are used on lanes too narrow for vehicles and bicycles to share side by side; they show where bicyclists are encouraged to ride and remind drivers to expect them.',
    ref: 'Manual p. 12 – Pavement Markings'
  },

  // ---------------- Special Lanes (p. 12–13) ----------------
  {
    id: 'gA-069',
    topic: 'Special Lanes',
    q: 'A driver may drive in a bicycle lane:',
    options: [
      'Only when necessary to turn left or right, after yielding to bicycles.',
      'Whenever no bicyclists are present.',
      'To pass slower traffic on the right.',
      'During rush hour only.'
    ],
    answer: 0,
    explain: 'Drivers should not drive in the bicycle lane except when necessary to turn; check mirrors and yield to bicycles in the lane before turning.',
    ref: 'Manual p. 12 – Pavement Markings'
  },
  {
    id: 'gA-070',
    topic: 'Special Lanes',
    q: 'At an intersection with a bicycle box, when the signal is red, drivers must:',
    options: [
      'Stop inside the bicycle box.',
      'Stop behind the bicycle box, and may not turn right on red.',
      'Turn right on red after yielding to bicycles.',
      'Stop only if a bicyclist is present.'
    ],
    answer: 1,
    explain: 'Drivers must stop behind all bicycle boxes, not inside them, and right turns on red are not allowed at these intersections.',
    ref: 'Manual p. 12 – Pavement Markings'
  },
  {
    id: 'gA-071',
    topic: 'Special Lanes',
    q: 'A diamond shape painted in the center of a highway lane marks:',
    options: [
      'A bicycle lane.',
      'A no passing zone.',
      'A High Occupancy Vehicle (HOV) lane.',
      'A lane that is ending.'
    ],
    answer: 2,
    explain: 'HOV lanes are marked by a diamond shape in the center of the lane; a diamond marking may also indicate a bus lane.',
    ref: 'Manual p. 13 – Pavement Markings'
  },
  {
    id: 'gA-072',
    topic: 'Special Lanes',
    q: 'HOV lanes that are separated from other lanes by a barrier are:',
    options: [
      'Open to all vehicles at all times.',
      'Toll-free for all vehicles.',
      'Used only by emergency vehicles.',
      'Reversible, with traffic flowing different directions at different times of day.'
    ],
    answer: 3,
    explain: 'If HOV lanes are separated by a barrier, they are reversible: traffic flows one way at certain times and the opposite direction at other times.',
    ref: 'Manual p. 13 – Pavement Markings'
  },
  {
    id: 'gA-073',
    topic: 'Special Lanes',
    q: 'You accidentally enter a toll lane reserved for E-ZPass vehicles without a transponder. You should:',
    options: [
      'Not stop; keep going, and the vehicle\'s registered owner will be billed.',
      'Stop at the gantry and back out of the lane.',
      'Stop and wait for a toll employee.',
      'Cut across to a cash lane immediately.'
    ],
    answer: 0,
    explain: 'If you enter an E-ZPass-only lane by mistake, do not stop; stopping could cause a rear-end crash. Cameras photograph the plate and the registered owner is billed.',
    ref: 'Manual p. 13 – Toll Plazas and Lanes'
  },
  {
    id: 'gA-074',
    topic: 'Special Lanes',
    q: 'Bus-only lanes may be indicated by:',
    options: [
      'Green pavement.',
      'BUS ONLY markings and/or red-colored pavement.',
      'Yellow pavement with black stripes.',
      'Double broken white lines.'
    ],
    answer: 1,
    explain: 'Bus-only lanes are indicated by BUS ONLY markings and/or red-colored pavement.',
    ref: 'Manual p. 13 – Pavement Markings'
  },

  // ---------------- Painted Curbs (p. 13) ----------------
  {
    id: 'gA-075',
    topic: 'Painted Curbs',
    q: 'A curb painted red generally means:',
    options: [
      'Stop only to load or unload.',
      'Stop only to pick up or drop off passengers.',
      'Do not stop, stand or park.',
      'Parking for emergency vehicles and disabled drivers only.'
    ],
    answer: 2,
    explain: 'Generally, a red curb means do not stop, stand or park.',
    ref: 'Manual p. 13 – Painted Curbs'
  },
  {
    id: 'gA-076',
    topic: 'Painted Curbs',
    q: 'A curb painted yellow generally means:',
    options: [
      'Do not stop, stand or park.',
      'Park for up to 15 minutes.',
      'Stop only to pick up or drop off passengers.',
      'Stop only long enough to load or unload, and stay with your car.'
    ],
    answer: 3,
    explain: 'Generally, a yellow curb means stop only long enough to load or unload; stay with your car.',
    ref: 'Manual p. 13 – Painted Curbs'
  },
  {
    id: 'gA-077',
    topic: 'Painted Curbs',
    q: 'A curb painted white generally means:',
    options: [
      'Stop only long enough to pick up or drop off passengers.',
      'Stop only long enough to load or unload freight.',
      'Unlimited parking.',
      'Do not stop, stand or park.'
    ],
    answer: 0,
    explain: 'Generally, a white curb means stop only long enough to pick up or drop off passengers.',
    ref: 'Manual p. 13 – Painted Curbs'
  },

  // ---------------- Hand Position (p. 14) ----------------
  {
    id: 'gA-078',
    topic: 'Hand Position',
    q: 'If your steering wheel were a clock, your hands should be at:',
    options: [
      'The 10 o\'clock and 2 o\'clock positions.',
      'The 8 o\'clock and 4 o\'clock positions.',
      'The 12 o\'clock position.',
      'The 9 o\'clock and 6 o\'clock positions.'
    ],
    answer: 1,
    explain: 'Your hands should be at the 8 o\'clock and 4 o\'clock positions, holding the wheel with your fingers and thumbs rather than your palms.',
    ref: 'Manual p. 14 – Hand Position'
  },

  // ---------------- Speed Limits (p. 14–15) ----------------
  {
    id: 'gA-079',
    topic: 'Speed Limits',
    q: 'In Virginia, an officer may charge you with reckless driving if you drive:',
    options: [
      '10 or more MPH above the limit, or over 75 MPH.',
      '15 or more MPH above the limit, or over 80 MPH.',
      '20 or more MPH above the limit, or over 85 MPH.',
      '25 or more MPH above the limit, or over 90 MPH.'
    ],
    answer: 2,
    explain: 'Driving 20 or more MPH above the speed limit, or over 85 MPH regardless of the limit, may be charged as reckless driving.',
    ref: 'Manual p. 14 – Speed Limits'
  },
  {
    id: 'gA-080',
    topic: 'Speed Limits',
    q: 'Driving 90 MPH on a highway posted at 70 MPH in Virginia:',
    options: [
      'Is only a speeding infraction with no criminal penalty.',
      'Results in a warning for first-time offenders.',
      'Is legal if traffic is light.',
      'May be charged as reckless driving, a misdemeanor criminal offense.'
    ],
    answer: 3,
    explain: 'Driving over 85 MPH, regardless of the speed limit, may be charged as reckless driving, which is a misdemeanor criminal offense if convicted.',
    ref: 'Manual p. 14 – Speed Limits'
  },
  {
    id: 'gA-081',
    topic: 'Speed Limits',
    q: 'You are subject to an additional $100 fine if convicted of driving between:',
    options: [
      '81 and 85 MPH in a 65-MPH zone.',
      '71 and 75 MPH in a 55-MPH zone.',
      '66 and 70 MPH in a 55-MPH zone.',
      '76 and 80 MPH in a 70-MPH zone.'
    ],
    answer: 0,
    explain: 'You are subject to an additional $100 fine if convicted of driving between 81 and 85 MPH in a 65-MPH zone.',
    ref: 'Manual p. 14 – Speed Limits'
  },
  {
    id: 'gA-082',
    topic: 'Speed Limits',
    q: 'In Virginia, the use of radar detectors is:',
    options: [
      'Legal for passenger vehicles only.',
      'Illegal.',
      'Legal except in work zones.',
      'Legal if the device is not visible.'
    ],
    answer: 1,
    explain: 'It is illegal to use radar detectors in Virginia.',
    ref: 'Manual p. 14 – Speed Limits'
  },
  {
    id: 'gA-083',
    topic: 'Speed Limits',
    q: 'Unless otherwise posted, the maximum speed limit in school, business and residential areas is:',
    options: [
      '15 MPH.',
      '20 MPH.',
      '25 MPH.',
      '35 MPH.'
    ],
    answer: 2,
    explain: 'Unless posted otherwise, the maximum speed limit for passenger vehicles and motorcycles is 25 MPH for school, business and residential areas.',
    ref: 'Manual p. 15 – Speed Limits'
  },
  {
    id: 'gA-084',
    topic: 'Speed Limits',
    q: 'Unless otherwise posted, the maximum speed limit on unpaved roads in Virginia is:',
    options: [
      '25 MPH.',
      '45 MPH.',
      '55 MPH.',
      '35 MPH.'
    ],
    answer: 3,
    explain: 'Unless posted otherwise, the maximum speed limit is 35 MPH for unpaved roads.',
    ref: 'Manual p. 15 – Speed Limits'
  },
  {
    id: 'gA-085',
    topic: 'Speed Limits',
    q: 'Unless a sign states otherwise, the maximum speed limit for passenger vehicles on roads other than school, business, residential or unpaved roads is:',
    options: [
      '55 MPH.',
      '45 MPH.',
      '60 MPH.',
      '65 MPH.'
    ],
    answer: 0,
    explain: 'Unless otherwise posted, the maximum speed limit is 55 MPH for all other roads.',
    ref: 'Manual p. 15 – Speed Limits'
  },
  {
    id: 'gA-086',
    topic: 'Speed Limits',
    q: 'A speed limit is:',
    options: [
      'The minimum speed you must drive in all conditions.',
      'The maximum legal speed under ideal conditions.',
      'A suggested speed that may be exceeded when passing.',
      'The speed you must drive regardless of weather.'
    ],
    answer: 1,
    explain: 'A speed limit is the maximum legal speed you can travel under ideal conditions. You may drive slower as long as you don\'t impede the normal movement of traffic.',
    ref: 'Manual p. 14 – Speed Limits'
  },

  // ---------------- Stopping (p. 15) ----------------
  {
    id: 'gA-087',
    topic: 'Stopping',
    q: 'When entering a street from a driveway, alley or parking lot that crosses a sidewalk, you must:',
    options: [
      'Slow down and enter if no cars are coming.',
      'Sound your horn and proceed.',
      'Stop before crossing the sidewalk.',
      'Stop only if pedestrians are visible.'
    ],
    answer: 2,
    explain: 'You must always stop when entering a street or crossing over a sidewalk from a driveway, alley, building or parking lot.',
    ref: 'Manual p. 15 – Stopping'
  },
  {
    id: 'gA-088',
    topic: 'Stopping',
    q: 'If you fail to obey an officer\'s signal to stop and the pursuing officer is killed as a direct result of the pursuit, you will be guilty of:',
    options: [
      'A Class 1 misdemeanor.',
      'Reckless driving.',
      'A traffic infraction.',
      'A Class 4 felony.'
    ],
    answer: 3,
    explain: 'If you don\'t obey a law enforcement officer\'s signal to stop and the officer is killed as a direct result of the pursuit, you will be guilty of a Class 4 felony.',
    ref: 'Manual p. 15 – Stopping'
  },
  {
    id: 'gA-089',
    topic: 'Stopping',
    q: 'You are behind a car at a stop sign. When that car proceeds through the intersection, you should:',
    options: [
      'Stop at the sign yourself and proceed when the way is clear.',
      'Follow it through without stopping since it already stopped.',
      'Slow down and roll through the intersection.',
      'Wait for another vehicle to wave you through.'
    ],
    answer: 0,
    explain: 'When approaching a stop sign and the car in front of you proceeds, stop at the sign and proceed when the way is clear.',
    ref: 'Manual p. 15 – Stopping'
  },
  {
    id: 'gA-090',
    topic: 'School Buses',
    q: 'You approach a school bus stopped with flashing red lights and an extended stop sign on a two-lane road, coming toward it from the opposite direction. You must:',
    options: [
      'Slow down and pass carefully.',
      'Stop and remain stopped until all persons are clear and the bus moves again.',
      'Continue at normal speed since you are in the opposite lane.',
      'Stop, then proceed when the children are on the sidewalk.'
    ],
    answer: 1,
    explain: 'You must stop for a stopped school bus with flashing red lights and extended stop sign when approaching from any direction, and remain stopped until all persons are clear and the bus moves again.',
    ref: 'Manual p. 15 – Stopping for School Buses'
  },
  {
    id: 'gA-091',
    topic: 'School Buses',
    q: 'You do not have to stop for a stopped school bus with flashing red lights when:',
    options: [
      'You are driving on a private road.',
      'You are approaching from behind the bus.',
      'You are traveling the opposite direction and a median or barrier separates you from the bus.',
      'You are in a school driveway.'
    ],
    answer: 2,
    explain: 'You need not stop if you are traveling the opposite direction on a roadway divided by a median or barrier and the bus is on the other side, but be prepared for persons exiting the bus.',
    ref: 'Manual p. 15 – Stopping for School Buses'
  },
  {
    id: 'gA-092',
    topic: 'School Buses',
    q: 'A school bus is loading passengers but its warning signals are not on. You must:',
    options: [
      'Pass slowly, since the signals are off.',
      'Sound your horn and pass on the left.',
      'Slow to 10 MPH and pass.',
      'Stop.'
    ],
    answer: 3,
    explain: 'You must also stop if the bus is loading or unloading passengers and the signals are not on.',
    ref: 'Manual p. 15 – Stopping for School Buses'
  },
  {
    id: 'gA-093',
    topic: 'Stopping Distance',
    q: 'The three factors that determine the distance it takes to stop your vehicle are:',
    options: [
      'Perception time, reaction distance and braking distance.',
      'Speed, vehicle weight and tire pressure.',
      'Following distance, braking distance and road width.',
      'Reaction time, steering distance and engine power.'
    ],
    answer: 0,
    explain: 'Three factors determine stopping distance: perception time, reaction distance and braking distance.',
    ref: 'Manual p. 15 – Stopping Distance'
  },
  {
    id: 'gA-094',
    topic: 'Stopping Distance',
    q: 'Reaction distance is the distance your vehicle travels:',
    options: [
      'After you apply the brakes until you stop.',
      'Between recognizing a problem and applying the brakes.',
      'Before you recognize a hazard.',
      'While the antilock brakes are engaged.'
    ],
    answer: 1,
    explain: 'Reaction distance is the distance your vehicle travels between the time you recognize a problem and the time you apply the brakes.',
    ref: 'Manual p. 15 – Stopping Distance'
  },
  {
    id: 'gA-095',
    topic: 'Stopping Distance',
    q: 'Compared to dry pavement, wet pavement can:',
    options: [
      'Have no effect on braking distance.',
      'Reduce your braking distance by half.',
      'Double your braking distance.',
      'Triple your reaction distance.'
    ],
    answer: 2,
    explain: 'Braking distance is affected by pavement condition; for example, wet pavement can double your braking distance.',
    ref: 'Manual p. 15 – Stopping Distance'
  },
  {
    id: 'gA-096',
    topic: 'Stopping Distance',
    q: 'If your vehicle has antilock brakes, in a hard stop you should:',
    options: [
      'Pump the brakes rapidly.',
      'Shift into neutral.',
      'Use the parking brake.',
      'Never pump the brakes.'
    ],
    answer: 3,
    explain: 'Understand how your antilock brakes work and remember: never pump antilock brakes.',
    ref: 'Manual p. 15 – Antilock Brakes'
  },

  // ---------------- Right-of-Way (p. 16) ----------------
  {
    id: 'gA-097',
    topic: 'Right-of-Way',
    q: 'Two vehicles arrive at an intersection with no signs or signals at the same time from different directions. Who goes first?',
    options: [
      'The driver on the right goes first.',
      'The driver on the left goes first.',
      'The driver going faster goes first.',
      'The driver turning left goes first.'
    ],
    answer: 0,
    explain: 'When vehicles arrive at the same time at an intersection with no signs or signals, the driver on the left must allow the driver on the right to go first.',
    ref: 'Manual p. 16 – Yielding the Right-of-Way'
  },
  {
    id: 'gA-098',
    topic: 'Right-of-Way',
    q: 'When vehicles from different directions arrive at an intersection at different times:',
    options: [
      'The vehicle on the right always goes first.',
      'The vehicle that arrives first goes first.',
      'The vehicle on the wider road goes first.',
      'The vehicle going straight goes first.'
    ],
    answer: 1,
    explain: 'When vehicles from different directions arrive at different times, the vehicle that arrives first goes first.',
    ref: 'Manual p. 16 – Yielding the Right-of-Way'
  },
  {
    id: 'gA-099',
    topic: 'Right-of-Way',
    q: 'When entering an interstate from an entrance ramp, you must:',
    options: [
      'Expect traffic on the highway to move over for you.',
      'Stop at the end of the ramp before merging.',
      'Yield the right-of-way to traffic already on the highway.',
      'Merge at a speed below the posted minimum.'
    ],
    answer: 2,
    explain: 'Drivers entering an interstate from an entrance ramp must yield the right-of-way to traffic already on the highway; yield also means stop if you cannot merge safely.',
    ref: 'Manual p. 16 – Yielding the Right-of-Way'
  },
  {
    id: 'gA-100',
    topic: 'Right-of-Way',
    q: 'When entering a roadway from a private road or driveway, you must:',
    options: [
      'Yield only to vehicles on your left.',
      'Proceed if you signal first.',
      'Yield only to pedestrians.',
      'Stop and yield to all traffic and pedestrians.'
    ],
    answer: 3,
    explain: 'When entering a roadway from a private road or driveway, you must stop and yield to all traffic and pedestrians.',
    ref: 'Manual p. 16 – Yielding the Right-of-Way'
  },
  {
    id: 'gA-101',
    topic: 'Right-of-Way',
    q: 'You must yield to pedestrians crossing:',
    options: [
      'Within a clearly marked crosswalk or at an unmarked intersection.',
      'Only at marked crosswalks with signals.',
      'Only when they have a WALK signal.',
      'Only in school zones.'
    ],
    answer: 0,
    explain: 'You must yield to pedestrians or bicyclists crossing within a clearly marked crosswalk or at an unmarked intersection.',
    ref: 'Manual p. 16 – Yielding the Right-of-Way'
  },
  {
    id: 'gA-102',
    topic: 'Right-of-Way',
    q: 'Which is true about funeral processions?',
    options: [
      'You may join the procession if you are going the same way.',
      'You must yield and may not cut through, join or interfere with it.',
      'You may cut through the procession at a green light.',
      'Processions must stop at every red light even when escorted by police.'
    ],
    answer: 1,
    explain: 'You must yield to funeral processions and not cut through, join or interfere with them. Unless led by a police escort, only the lead vehicle must obey signs and signals.',
    ref: 'Manual p. 16 – Yielding the Right-of-Way'
  },
  {
    id: 'gA-103',
    topic: 'Right-of-Way',
    q: 'In a funeral procession not led by a police escort, the vehicles following the lead vehicle:',
    options: [
      'Must stop at every stop sign and red light.',
      'Must keep their headlights off.',
      'May follow carefully without stopping and may use hazard lights.',
      'Must drive in the left lane only.'
    ],
    answer: 2,
    explain: 'Unless led by a police escort, the lead vehicle must obey all signs and signals; other drivers in the procession may follow carefully without stopping and may use hazard lights.',
    ref: 'Manual p. 16 – Yielding the Right-of-Way'
  },
  {
    id: 'gA-104',
    topic: 'Right-of-Way',
    q: 'Regarding military convoys, drivers must:',
    options: [
      'Pass the convoy as quickly as possible.',
      'Join the convoy to keep traffic moving.',
      'Cut through the convoy only at intersections.',
      'Yield to the convoy and never cut through or join it.'
    ],
    answer: 3,
    explain: 'You must yield to all military convoys. Never cut through or join a military convoy.',
    ref: 'Manual p. 16 – Yielding the Right-of-Way'
  },

  // ---------------- Emergency Vehicles (p. 16–17) ----------------
  {
    id: 'gA-105',
    topic: 'Emergency Vehicles',
    q: 'When approaching a stationary emergency vehicle or tow truck with flashing lights on a highway, you should:',
    options: [
      'Change to a lane not next to it if safe; otherwise reduce speed and proceed with caution.',
      'Stop behind the vehicle until it leaves.',
      'Maintain your speed and stay in your lane.',
      'Sound your horn and pass quickly.'
    ],
    answer: 0,
    explain: 'Proceed with caution and, if reasonable, change to a lane not next to the vehicle. If you can\'t change lanes safely, reduce speed and proceed with caution.',
    ref: 'Manual p. 16 – Yielding to Vehicles with Flashing Lights'
  },
  {
    id: 'gA-106',
    topic: 'Emergency Vehicles',
    q: 'Violating the law on passing stationary emergency vehicles with flashing lights can result in:',
    options: [
      'A written warning only.',
      'Court suspension of your license and demerit points.',
      'A mandatory jail sentence of 30 days.',
      'A $50 fine with no points.'
    ],
    answer: 1,
    explain: 'Violations can result in court suspension of your driver\'s license and demerit points on your driving record.',
    ref: 'Manual p. 16 – Yielding to Vehicles with Flashing Lights'
  },
  {
    id: 'gA-107',
    topic: 'Emergency Vehicles',
    q: 'On a two-lane road where you cannot change lanes, when passing a stopped trash collection vehicle you must:',
    options: [
      'Stop until the vehicle moves.',
      'Pass at the posted speed with at least three feet of clearance.',
      'Slow to 10 MPH below the posted limit and pass at least two feet to the left.',
      'Slow to 15 MPH and pass at least five feet to the left.'
    ],
    answer: 2,
    explain: 'On a highway with fewer than four lanes or if you can\'t change lanes, slow down to 10 MPH below the posted speed limit and pass at least two feet to the left of the trash vehicle.',
    ref: 'Manual p. 17 – Yielding to Vehicles with Flashing Lights'
  },
  {
    id: 'gA-108',
    topic: 'Emergency Vehicles',
    q: 'You may not park within how many feet of where fire trucks or equipment are stopped answering an alarm?',
    options: [
      '100 feet.',
      '200 feet.',
      '300 feet.',
      '500 feet.'
    ],
    answer: 3,
    explain: 'You may not park within 500 feet of where fire trucks or equipment are stopped answering an alarm.',
    ref: 'Manual p. 17 – Yielding to Vehicles with Flashing Lights'
  },
  {
    id: 'gA-109',
    topic: 'Emergency Vehicles',
    q: 'You should never follow an emergency vehicle with flashing lights closer than:',
    options: [
      '500 feet.',
      '300 feet.',
      '200 feet.',
      '100 feet.'
    ],
    answer: 0,
    explain: 'Never follow an emergency vehicle closer than 500 feet when its lights are flashing.',
    ref: 'Manual p. 17 – Yielding to Vehicles with Flashing Lights'
  },
  {
    id: 'gA-110',
    topic: 'Emergency Vehicles',
    q: 'An ambulance using its siren and flashing lights approaches from behind. You must:',
    options: [
      'Speed up to stay ahead of it.',
      'Immediately yield, pull over to the right edge of the road, and stop until it passes.',
      'Stop immediately in your lane.',
      'Move to the left lane and slow down.'
    ],
    answer: 1,
    explain: 'When emergency vehicles approach from behind using a siren, flashing lights or both, immediately yield, safely pull over to the right edge of the road, and stop until it has passed.',
    ref: 'Manual p. 17 – Yielding to Vehicles with Flashing Lights'
  },
  {
    id: 'gA-111',
    topic: 'Emergency Vehicles',
    q: 'An emergency vehicle with lights and siren approaches in the opposite lane of an undivided highway. You must:',
    options: [
      'Continue driving since it is in the other lane.',
      'Slow down but keep moving.',
      'Pull over to the edge of the road and stop until it passes.',
      'Turn on your hazard lights and keep driving.'
    ],
    answer: 2,
    explain: 'When emergency vehicles approach in the opposite lane on an undivided highway, you must pull over to the edge of the road and stop until the emergency vehicle passes.',
    ref: 'Manual p. 17 – Yielding to Vehicles with Flashing Lights'
  },
  {
    id: 'gA-112',
    topic: 'Emergency Vehicles',
    q: 'When passing a stationary vehicle displaying hazard flashers, caution signs, or lit flares, you are required to:',
    options: [
      'Sound your horn as you pass.',
      'Stop and offer assistance.',
      'Maintain your lane and speed.',
      'Change lanes and proceed with caution.'
    ],
    answer: 3,
    explain: 'When passing stationary vehicles with hazard flashers, caution signs, or lit flares, you are required to make a lane change and proceed with caution.',
    ref: 'Manual p. 17 – Yielding to Vehicles with Flashing Lights'
  },

  // ---------------- Roundabouts (p. 17) ----------------
  {
    id: 'gA-113',
    topic: 'Roundabouts',
    q: 'After entering a roundabout, drivers must travel:',
    options: [
      'Counter-clockwise.',
      'Clockwise.',
      'In whichever direction is shortest to their exit.',
      'Straight across the center island.'
    ],
    answer: 0,
    explain: 'After entering the roundabout, drivers must travel in a counter-clockwise direction.',
    ref: 'Manual p. 17 – Roundabouts'
  },
  {
    id: 'gA-114',
    topic: 'Roundabouts',
    q: 'When entering a roundabout, you must yield to:',
    options: [
      'Only vehicles entering from your right.',
      'Pedestrians and traffic already in the roundabout.',
      'No one; vehicles in the circle must yield to you.',
      'Only large trucks.'
    ],
    answer: 1,
    explain: 'Entering traffic must yield the right-of-way to pedestrians, and to traffic already in the circle.',
    ref: 'Manual p. 17 – Roundabouts'
  },
  {
    id: 'gA-115',
    topic: 'Roundabouts',
    q: 'In a dual-lane roundabout, if you plan to turn left you should:',
    options: [
      'Stay to the right as you enter.',
      'Use either lane.',
      'Stay to the left as you enter.',
      'Enter the roundabout going clockwise.'
    ],
    answer: 2,
    explain: 'If you plan to turn left, stay to the left as you enter. To turn right, stay right; to go straight, you may use either lane.',
    ref: 'Manual p. 17 – Roundabouts'
  },
  {
    id: 'gA-116',
    topic: 'Roundabouts',
    q: 'While inside a roundabout and preparing to exit, you should:',
    options: [
      'Use your left turn signal.',
      'Stop before exiting.',
      'Change lanes freely to reach the exit.',
      'Use your right turn signal and check for vehicles beside or behind you.'
    ],
    answer: 3,
    explain: 'Stay in your lane until ready to exit and use your right turn signal. Check for vehicles continuing through the roundabout next to or behind you before exiting.',
    ref: 'Manual p. 17 – Roundabouts'
  },

  // ---------------- Changing Lanes (p. 17) ----------------
  {
    id: 'gA-117',
    topic: 'Changing Lanes',
    q: 'Just before moving into another lane, you should:',
    options: [
      'Quickly glance over your shoulder to check your blind spot.',
      'Sound your horn.',
      'Slow down sharply.',
      'Turn off your turn signal.'
    ],
    answer: 0,
    explain: 'Check mirrors, signal, check for others moving into the same lane, and just before moving, quickly glance over your shoulder to check your blind spot.',
    ref: 'Manual p. 17 – Changing Lanes'
  },
  {
    id: 'gA-118',
    topic: 'Changing Lanes',
    q: 'On a multi-lane highway, the left lane is for:',
    options: [
      'Cruising at the speed limit.',
      'Passing only.',
      'Slower traffic.',
      'Trucks and buses.'
    ],
    answer: 1,
    explain: 'Stay in the right lane if you are driving slower than traffic around you. The left lane is for passing only, not cruising.',
    ref: 'Manual p. 17 – Changing Lanes'
  },

  // ---------------- Passing (p. 17–18) ----------------
  {
    id: 'gA-119',
    topic: 'Passing',
    q: 'After passing a vehicle, it is safe to return to the right lane when:',
    options: [
      'You are one car length ahead of it.',
      'The other driver flashes their headlights.',
      'You can see the front of the passed vehicle in your rearview mirror.',
      'You have passed it by 100 feet.'
    ],
    answer: 2,
    explain: 'Return to the right lane as soon as you can see the front of the passed vehicle in your rearview mirror.',
    ref: 'Manual p. 17 – Passing'
  },
  {
    id: 'gA-120',
    topic: 'Passing',
    q: 'While passing another vehicle, exceeding the speed limit is:',
    options: [
      'Allowed by up to 10 MPH.',
      'Allowed by up to 5 MPH.',
      'Allowed on two-lane roads only.',
      'Against the law.'
    ],
    answer: 3,
    explain: 'It is against the law to exceed the speed limit as you pass.',
    ref: 'Manual p. 17 – Passing'
  },
  {
    id: 'gA-121',
    topic: 'Passing',
    q: 'You may pass on the right when:',
    options: [
      'The vehicle ahead has signaled and is making a left turn, and you can stay on the pavement.',
      'The shoulder is wide enough to drive on.',
      'The vehicle ahead is going below the speed limit.',
      'You are on any two-lane road.'
    ],
    answer: 0,
    explain: 'You may pass on the right if the vehicle ahead has signaled and is turning left, but not if you must drive off the pavement or main portion of the roadway.',
    ref: 'Manual p. 17 – Passing'
  },
  {
    id: 'gA-122',
    topic: 'Passing',
    q: 'When passing a person riding a bicycle or moped, you must reduce speed and pass at least:',
    options: [
      'Two feet to the left.',
      'Three feet to the left.',
      'Five feet to the left.',
      'Six feet to the left.'
    ],
    answer: 1,
    explain: 'When approaching or passing a person riding a bicycle, moped, power-assisted bicycle or other device, reduce speed and pass at least three feet to the left.',
    ref: 'Manual p. 17 – Passing'
  },
  {
    id: 'gA-123',
    topic: 'Passing',
    q: 'When another vehicle is passing you, you should:',
    options: [
      'Speed up so the pass is completed quickly.',
      'Move to the left to block the pass.',
      'Maintain a steady speed or slow down.',
      'Flash your headlights.'
    ],
    answer: 2,
    explain: 'When being passed, don\'t speed up. Maintain a steady speed or slow down.',
    ref: 'Manual p. 17 – Passing'
  },
  {
    id: 'gA-124',
    topic: 'Passing',
    q: 'On a two-lane road, passing on a hill, on a curve, or at an intersection or railroad crossing is:',
    options: [
      'Legal if you can see 200 feet ahead.',
      'Legal if you sound your horn first.',
      'Legal during daylight hours.',
      'Unlawful and unsafe.'
    ],
    answer: 3,
    explain: 'Passing is unlawful on hills, curves, at intersections or railroad crossings, except on roads with two or more lanes moving in the same direction.',
    ref: 'Manual p. 17 – Passing'
  },
  {
    id: 'gA-125',
    topic: 'Passing',
    q: 'Passing is unlawful when:',
    options: [
      'A solid line marks the left side of your lane.',
      'A broken line marks the left side of your lane.',
      'You are on a road with two lanes in your direction.',
      'The vehicle ahead is traveling under the speed limit.'
    ],
    answer: 0,
    explain: 'Passing is unlawful and unsafe when a solid line marks the left side of your lane.',
    ref: 'Manual p. 18 – Passing'
  },
  {
    id: 'gA-126',
    topic: 'Passing',
    q: 'You are approaching a crosswalk and the vehicle in the lane next to you is stopped. You should:',
    options: [
      'Pass it carefully at reduced speed.',
      'Not pass; it may be stopped for a pedestrian.',
      'Sound your horn and pass.',
      'Change lanes behind it and pass on the other side.'
    ],
    answer: 1,
    explain: 'Passing is unlawful and unsafe when approaching a crosswalk and the vehicle ahead of you or in the lane next to you is stopped.',
    ref: 'Manual p. 18 – Passing'
  },
  {
    id: 'gA-127',
    topic: 'Passing',
    q: 'If you are still in the left lane passing when you reach a No Passing zone:',
    options: [
      'You may finish the pass if no traffic is coming.',
      'You must speed up to complete the pass.',
      'You are breaking the law.',
      'You may continue as long as you signal.'
    ],
    answer: 2,
    explain: 'Complete the pass before you reach a No Passing zone. If you\'re still in the left lane when you reach the zone, you\'re breaking the law.',
    ref: 'Manual p. 17 – Passing'
  },

  // ---------------- Over-correcting (p. 18) ----------------
  {
    id: 'gA-128',
    topic: 'Over-correcting',
    q: 'If your vehicle veers off the road, you should:',
    options: [
      'Brake hard and jerk the wheel back toward the road.',
      'Accelerate and steer sharply back onto the pavement.',
      'Turn the wheel sharply away from the road edge.',
      'Gradually reduce speed, look where you want to go, and slowly steer back onto the road.'
    ],
    answer: 3,
    explain: 'If you veer off the road, do not panic. Gradually reduce your speed, look in the direction you want to go, and slowly steer back onto the roadway.',
    ref: 'Manual p. 18 – Over-correcting'
  },
  {
    id: 'gA-129',
    topic: 'Over-correcting',
    q: 'Over-correcting occurs when a driver turns the wheel too sharply, causing:',
    options: [
      'The rear wheels to slide toward the outside of the turn.',
      'The front wheels to lock up.',
      'The engine to stall.',
      'The vehicle to slow down suddenly.'
    ],
    answer: 0,
    explain: 'Over-correcting occurs when the driver turns the steering wheel more sharply than expected, causing the rear wheels to slide toward the outside of the turn and possible loss of control.',
    ref: 'Manual p. 18 – Over-correcting'
  },

  // ---------------- Turning (p. 18) ----------------
  {
    id: 'gA-130',
    topic: 'Turning',
    q: 'Before making a turn, you should signal at least:',
    options: [
      '1 to 2 seconds, or 50 feet, ahead.',
      '3 to 4 seconds, or 100 feet, ahead.',
      '5 to 6 seconds, or 200 feet, ahead.',
      '10 seconds, or 500 feet, ahead.'
    ],
    answer: 1,
    explain: 'You should signal at least three or four seconds, 100 feet, ahead of the turn.',
    ref: 'Manual p. 18 – Turning'
  },
  {
    id: 'gA-131',
    topic: 'Turning',
    q: 'While waiting to make a left turn, you should keep your front wheels:',
    options: [
      'Turned to the left so you are ready to go.',
      'Turned to the right, toward the curb.',
      'Pointed straight ahead until you actually begin the turn.',
      'In whatever position is most comfortable.'
    ],
    answer: 2,
    explain: 'Keep your front wheels straight until you actually make the left turn; this prevents being pushed into oncoming traffic if you are hit from behind.',
    ref: 'Manual p. 18 – Turning'
  },
  {
    id: 'gA-132',
    topic: 'Turning',
    q: 'When making a right turn, you should turn into:',
    options: [
      'Any lane that is open.',
      'The far left lane.',
      'The center lane.',
      'The lane closest to the curb, unless markings direct otherwise.'
    ],
    answer: 3,
    explain: 'Start a right turn from the lane furthest right and turn into the lane closest to the curb unless pavement markings lead you otherwise; then change lanes if needed.',
    ref: 'Manual p. 18 – Turning'
  },
  {
    id: 'gA-133',
    topic: 'Turning',
    q: 'When two vehicles approaching each other are both turning left, they should:',
    options: [
      'Turn in front of each other so the passenger sides pass beside each other.',
      'Turn behind each other so the driver sides pass beside each other.',
      'Take turns, with the vehicle on the right going first.',
      'Both wait for a green arrow.'
    ],
    answer: 0,
    explain: 'When two approaching vehicles are both turning left, both should turn in front of each other so that their passenger sides are beside each other.',
    ref: 'Manual p. 18 – Turning'
  },
  {
    id: 'gA-134',
    topic: 'Turning',
    q: 'When making a left turn from a two-way street with a single left lane, you should turn into:',
    options: [
      'The rightmost lane of the intersecting road.',
      'The leftmost lane of the intersecting road, unless markings direct otherwise.',
      'Whichever lane has the least traffic.',
      'The center turn lane.'
    ],
    answer: 1,
    explain: 'Be in the furthest left lane possible and turn into the leftmost lane on the intersecting road, unless pavement markings direct otherwise or multiple left turn lanes are provided.',
    ref: 'Manual p. 18 – Turning'
  },

  // ---------------- U-Turns (p. 18) ----------------
  {
    id: 'gA-135',
    topic: 'U-Turns',
    q: 'In business districts, cities and towns, U-turns are allowed:',
    options: [
      'Anywhere, if no traffic is coming.',
      'Only in the middle of the block.',
      'Only at intersections.',
      'Only at night.'
    ],
    answer: 2,
    explain: 'In business districts, cities and towns, U-turns are allowed only at intersections. Never make a U-turn on a highway.',
    ref: 'Manual p. 18 – U-Turns'
  },
  {
    id: 'gA-136',
    topic: 'U-Turns',
    q: 'When making a U-turn, after stopping and yielding you should proceed into:',
    options: [
      'The left lane going the opposite direction.',
      'The center turn lane.',
      'The shoulder, then merge into traffic.',
      'The outside or right-hand lane going the opposite direction.'
    ],
    answer: 3,
    explain: 'Turn on your left signal, stop, and yield. When clear, proceed into the outside or right-hand lane traveling in the opposite direction.',
    ref: 'Manual p. 18 – U-Turns'
  },
  {
    id: 'gA-137',
    topic: 'U-Turns',
    q: 'Making a U-turn on a highway is:',
    options: [
      'Never allowed.',
      'Allowed when traffic is light.',
      'Allowed if you use your hazard lights.',
      'Allowed at crossovers in the median.'
    ],
    answer: 0,
    explain: 'U-turns are not legal everywhere. Never make a U-turn on a highway.',
    ref: 'Manual p. 18 – U-Turns'
  },

  // ---------------- Turn Signals (p. 18) ----------------
  {
    id: 'gA-138',
    topic: 'Turn Signals',
    q: 'The correct hand signal for a right turn is:',
    options: [
      'Left hand and arm pointing straight out.',
      'Left hand and arm pointing upward.',
      'Left hand and arm pointing downward.',
      'Right hand and arm pointing straight out.'
    ],
    answer: 1,
    explain: 'For a right turn, the left hand and arm point upward.',
    ref: 'Manual p. 18 – Hand Signals'
  },
  {
    id: 'gA-139',
    topic: 'Turn Signals',
    q: 'The correct hand signal for a left turn is:',
    options: [
      'Left hand and arm pointing upward.',
      'Left hand and arm pointing downward.',
      'Left hand and arm pointing straight out.',
      'Right hand and arm pointing upward.'
    ],
    answer: 2,
    explain: 'For a left turn, the left hand and arm point straight out.',
    ref: 'Manual p. 18 – Hand Signals'
  },
  {
    id: 'gA-140',
    topic: 'Turn Signals',
    q: 'The correct hand signal to slow or stop is:',
    options: [
      'Left hand and arm pointing straight out.',
      'Left hand and arm pointing upward.',
      'Right hand and arm pointing downward.',
      'Left hand and arm pointing downward.'
    ],
    answer: 3,
    explain: 'To slow or stop, the left hand and arm point downward.',
    ref: 'Manual p. 18 – Hand Signals'
  },
  {
    id: 'gA-141',
    topic: 'Turn Signals',
    q: 'Using turn signals or hand signals when no other traffic is on the road is:',
    options: [
      'A good habit you should develop.',
      'Unnecessary and distracting.',
      'Required only at night.',
      'Required only on highways.'
    ],
    answer: 0,
    explain: 'Using your turn signal is required by law. Develop a good habit and use turn signals or hand signals even if no other traffic is on the road.',
    ref: 'Manual p. 18 – Turn Signals'
  },
  {
    id: 'gA-142',
    topic: 'Turn Signals',
    q: 'After you complete a turn or lane change, you should:',
    options: [
      'Leave the signal on until the next turn.',
      'Make sure the turn signal stops flashing.',
      'Tap your brakes to warn drivers behind you.',
      'Signal in the opposite direction.'
    ],
    answer: 1,
    explain: 'After you complete the turn or lane change, be sure the turn signal stops flashing.',
    ref: 'Manual p. 18 – Turn Signals'
  }
]);
