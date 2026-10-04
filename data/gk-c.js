window.VA = window.VA || {};

// General knowledge bank C: manual Sections 1 (testing/vision), 4, 5, 6 and 7 (printed pp. 3–4, 26–34).
window.VA.generalQuestions = (window.VA.generalQuestions || []).concat([
  // ---------- Seat Belts & Child Safety ----------
  {
    id: 'gC-001', topic: 'Seat Belts',
    q: 'Under Virginia law, who must wear safety belts?',
    options: ['Only the driver and front-seat passenger.', 'The driver and all passengers, front and rear.', 'Only passengers younger than age 18.', 'Only the driver, on interstate highways.'],
    answer: 1,
    explain: 'Virginia law requires the driver and all passengers, both front and rear, to wear safety belts.',
    ref: 'Manual p. 26 – Seat Belts'
  },
  {
    id: 'gC-002', topic: 'Seat Belts',
    q: 'A driver must make sure that any passenger younger than what age is secured in a safety belt, booster seat or child safety seat, no matter where the passenger sits?',
    options: ['16.', '21.', '18.', '12.'],
    answer: 2,
    explain: 'A driver transporting anyone younger than age 18 must ensure the passenger is properly secured in a safety belt, booster seat or child safety seat anywhere in the vehicle.',
    ref: 'Manual p. 26 – Seat Belts'
  },
  {
    id: 'gC-003', topic: 'Seat Belts',
    q: 'The lap belt should be worn:',
    options: ['Across your stomach, above your hip bones.', 'Loosely, so you can move freely.', 'High on your waist, under your ribs.', 'Low on your lap and against your thighs.'],
    answer: 3,
    explain: 'The manual says to wear the lap belt low on your lap and against your thighs, and both belts should be snug.',
    ref: 'Manual p. 26 – Seat Belts'
  },
  {
    id: 'gC-004', topic: 'Seat Belts',
    q: 'The shoulder belt should be worn:',
    options: ['Over your shoulder and across your chest.', 'Behind your back for comfort.', 'Under your arm closest to the door.', 'Across your neck and upper arm.'],
    answer: 0,
    explain: 'Wear the shoulder belt over your shoulder and across your chest; never wear it behind your back or under your arm.',
    ref: 'Manual p. 26 – Seat Belts'
  },
  {
    id: 'gC-005', topic: 'Seat Belts',
    q: 'A pregnant woman is much safer in a vehicle if she wears the lap belt:',
    options: ['Above her stomach.', 'As low on the pelvis as possible.', 'Unbuckled, using only the shoulder belt.', 'Loosely across her stomach.'],
    answer: 1,
    explain: 'Pregnant women are much safer if buckled up with the belt worn as low on the pelvis as possible.',
    ref: 'Manual p. 26 – Seat Belts'
  },
  {
    id: 'gC-006', topic: 'Seat Belts',
    q: 'A waiver of the seat belt requirement for medical reasons:',
    options: ['May be granted by DMV after a road skills test.', 'Is automatic for anyone over age 65.', 'May be granted by a licensed physician, and the signed statement must be carried.', 'Is granted by a police officer during a traffic stop.'],
    answer: 2,
    explain: 'A licensed physician may grant a waiver; the person must carry the physician\'s signed written statement identifying them and the reason.',
    ref: 'Manual p. 26 – Seat Belts'
  },
  {
    id: 'gC-007', topic: 'Seat Belts',
    q: 'According to the manual, wearing a seat belt can:',
    options: ['Reduce your insurance premium by half.', 'Replace the need for air bags.', 'Allow you to drive closer to other vehicles.', 'Double your chances of surviving a crash.'],
    answer: 3,
    explain: 'Seat belts can double your chances of surviving a crash and more than double your chances of avoiding serious injury.',
    ref: 'Manual p. 26 – Section 4: Seat Belts, Air Bags and Child Safety Seats'
  },

  // ---------- Air Bags ----------
  {
    id: 'gC-008', topic: 'Air Bags',
    q: 'If your vehicle has air bags, you should sit at least how far from the steering wheel?',
    options: ['Ten inches.', 'Six inches.', 'Two feet.', 'Four inches.'],
    answer: 0,
    explain: 'Move your seat back so that you are at least ten inches from the steering wheel.',
    ref: 'Manual p. 27 – Air Bags'
  },
  {
    id: 'gC-009', topic: 'Air Bags',
    q: 'If your steering wheel is adjustable and has an air bag, you should:',
    options: ['Tilt it upward toward your face.', 'Tilt it downward so the air bag points toward your chest.', 'Leave it fully extended toward you.', 'Remove the air bag cover.'],
    answer: 1,
    explain: 'Tilting the wheel downward points the air bag toward your chest instead of your head and neck.',
    ref: 'Manual p. 27 – Air Bags'
  },
  {
    id: 'gC-010', topic: 'Air Bags',
    q: 'Children ages 12 and under are safest when they ride:',
    options: ['In the front seat with the air bag on.', 'In an adult\'s lap in the front seat.', 'Buckled up in the back seat.', 'In the cargo area of a station wagon.'],
    answer: 2,
    explain: 'Children ages 12 and under are safer buckled up in the back seat.',
    ref: 'Manual p. 27 – Air Bags'
  },
  {
    id: 'gC-011', topic: 'Air Bags',
    q: 'Air bags provide the best protection when:',
    options: ['The driver sits as close to the wheel as possible.', 'Passengers do not wear lap belts.', 'The vehicle is struck from the rear.', 'They are used properly with safety belts.'],
    answer: 3,
    explain: 'Air bags, when used properly with safety belts, cushion drivers and passengers as they move forward in a front-end crash.',
    ref: 'Manual p. 27 – Air Bags'
  },

  // ---------- Child Safety Seats ----------
  {
    id: 'gC-012', topic: 'Child Safety Seats',
    q: 'In Virginia, all children under what age must be secured in a child safety seat or booster seat?',
    options: ['8.', '6.', '10.', '4.'],
    answer: 0,
    explain: 'All children under age 8 must be properly secured in a child safety seat or booster seat.',
    ref: 'Manual p. 27 – Child Safety Seats'
  },
  {
    id: 'gC-013', topic: 'Child Safety Seats',
    q: 'Children should ride in a rear-facing safety seat from birth until:',
    options: ['They are 6 months old.', 'Age 2, or as long as the seat manufacturer allows.', 'Age 1, or 20 pounds.', 'Age 4, regardless of the seat.'],
    answer: 1,
    explain: 'Children should ride rear facing from birth to 2 years, or as long as the safety seat manufacturer allows.',
    ref: 'Manual p. 27 – Child Safety Seats'
  },
  {
    id: 'gC-014', topic: 'Child Safety Seats',
    q: 'A rear-facing child seat may be placed in the front passenger seat only if:',
    options: ['The child is older than 1 year.', 'The trip is shorter than 10 miles.', 'The vehicle has no back seat and the passenger air bag is absent or turned off.', 'An adult sits in the back seat.'],
    answer: 2,
    explain: 'If the vehicle has no back seat, a rear-facing seat may go in front only if there is no passenger air bag or it is turned off.',
    ref: 'Manual p. 27 – Child Safety Seats'
  },
  {
    id: 'gC-015', topic: 'Child Safety Seats',
    q: 'If you are convicted of violating the child restraint law for the first time, you will be fined:',
    options: ['$100.', '$25.', '$500.', '$50.'],
    answer: 3,
    explain: 'A conviction for violating the child restraint law carries a $50 fine.',
    ref: 'Manual p. 27 – Child Safety Seats'
  },
  {
    id: 'gC-016', topic: 'Child Safety Seats',
    q: 'A second or subsequent violation of the child restraint law could mean a penalty of:',
    options: ['$500.', '$250.', '$1,000.', '$100.'],
    answer: 0,
    explain: 'A second or subsequent child restraint offense could mean a $500 penalty.',
    ref: 'Manual p. 27 – Child Safety Seats'
  },
  {
    id: 'gC-017', topic: 'Child Safety Seats',
    q: 'The safest place to install a child safety seat is:',
    options: ['The front passenger seat.', 'The center of the back seat.', 'Behind the driver\'s seat.', 'The rear cargo area.'],
    answer: 1,
    explain: 'The manual states the safest place to install a child safety seat is the center of the back seat.',
    ref: 'Manual p. 27 – Child Safety Seats'
  },
  {
    id: 'gC-018', topic: 'Child Safety Seats',
    q: 'It is illegal to transport children under what age in the bed of a pickup truck, even with a camper shell?',
    options: ['12.', '18.', '16.', '14.'],
    answer: 2,
    explain: 'It is illegal to transport children under age 16 in the bed of a pickup truck, even if equipped with a camper shell.',
    ref: 'Manual p. 27 – Child Safety Seats'
  },
  {
    id: 'gC-019', topic: 'Child Safety Seats',
    q: 'Who is responsible for making sure children in a vehicle are properly secured?',
    options: ['The child\'s parent, even if not present.', 'The oldest passenger.', 'The vehicle owner.', 'The driver.'],
    answer: 3,
    explain: 'The driver is responsible for making sure that children are properly secured.',
    ref: 'Manual p. 27 – Child Safety Seats'
  },
  {
    id: 'gC-020', topic: 'Child Safety Seats',
    q: 'One sign that a child can sit without a booster seat is that the lap belt:',
    options: ['Lies snugly across the upper thighs.', 'Rests across the stomach.', 'Can be pulled loose easily.', 'Sits just below the ribs.'],
    answer: 0,
    explain: 'Criteria for sitting without a booster seat include the lap belt lying snugly across the upper thighs and the shoulder belt across the shoulder and chest.',
    ref: 'Manual p. 27 – Child Safety Seats'
  },
  {
    id: 'gC-021', topic: 'Child Safety Seats',
    q: 'Which is one of the criteria for a child to ride without a booster seat?',
    options: ['The child is at least 40 pounds.', 'The child can keep knees naturally bent over the edge of the seat.', 'The child can reach the door handle.', 'The child is riding in the front seat.'],
    answer: 1,
    explain: 'A child should be able to keep knees naturally bent over the edge of the seat, sit all the way back, and keep feet flat on the floor for the entire trip.',
    ref: 'Manual p. 27 – Child Safety Seats'
  },
  {
    id: 'gC-022', topic: 'Child Safety Seats',
    q: 'You should never hold a child in your lap while riding because:',
    options: ['The child will block the driver\'s mirrors.', 'It is only allowed on short trips.', 'In a crash, the child may be crushed between your body and the dashboard or seat.', 'Your seat belt will not latch.'],
    answer: 2,
    explain: 'In a crash, a child held in a lap may be crushed between your body and the dashboard or the back of the seat.',
    ref: 'Manual p. 27 – Child Safety Seats'
  },
  {
    id: 'gC-023', topic: 'Child Safety Seats',
    q: 'If you must open a car door while traveling with children, you should first:',
    options: ['Slow to 10 mph.', 'Turn on your hazard lights and keep moving.', 'Ask the child to hold the handle.', 'Pull off the road and come to a complete stop.'],
    answer: 3,
    explain: 'If you must open a door, pull the vehicle off the road and come to a complete stop.',
    ref: 'Manual p. 27 – Child Safety Seats'
  },

  // ---------- Suspension & Revocation ----------
  {
    id: 'gC-029', topic: 'Suspension & Revocation',
    q: 'If your driver\'s license is suspended, it means your privilege to drive has been:',
    options: ['Terminated permanently.', 'Withdrawn temporarily.', 'Restricted to daylight hours.', 'Transferred to probation status.'],
    answer: 1,
    explain: 'Suspension means your privilege to drive has been withdrawn temporarily; you may reinstate it after the suspension period by paying fees.',
    ref: 'Manual p. 28 – Section 5: Penalties'
  },
  {
    id: 'gC-030', topic: 'Suspension & Revocation',
    q: 'If your driving privilege is revoked, it means your privilege to drive has been:',
    options: ['Withdrawn for 30 days.', 'Restricted to driving to work.', 'Terminated.', 'Placed under medical review.'],
    answer: 2,
    explain: 'Revocation means your privilege to drive has been terminated; you must re-apply after the revocation period.',
    ref: 'Manual p. 28 – Section 5: Penalties'
  },
  {
    id: 'gC-031', topic: 'Suspension & Revocation',
    q: 'To restore your driving privilege after a revocation, you must:',
    options: ['Only pay a reinstatement fee.', 'Wait for DMV to mail you a new license.', 'Complete a driver improvement clinic only.', 'Re-apply, show legal presence, and pass the vision, knowledge and road skills tests.'],
    answer: 3,
    explain: 'After revocation you must re-apply, show proof of legal presence, pass the vision screening, two-part knowledge exam and road skills test, and pay fees.',
    ref: 'Manual p. 28 – Section 5: Penalties'
  },
  {
    id: 'gC-032', topic: 'Suspension & Revocation',
    q: 'If your license has been expired for one year or more during a suspension, to be reinstated you must:',
    options: ['Show proof of legal presence and pass the knowledge, road skills and vision exams.', 'Only pay the reinstatement fee.', 'Only pass the vision screening.', 'Wait an additional year.'],
    answer: 0,
    explain: 'If your license has been expired for one year or more during the suspension, you must show legal presence and pass the two-part knowledge, road skills and vision exams.',
    ref: 'Manual p. 28 – Section 5: Penalties'
  },
  {
    id: 'gC-033', topic: 'Suspension & Revocation',
    q: 'Which offense will result in the court or DMV suspending or revoking your driving privilege?',
    options: ['Failing to use a turn signal.', 'Failing to stop and identify yourself at a crash where someone was injured.', 'Parking too close to a fire hydrant.', 'Driving with an expired inspection sticker.'],
    answer: 1,
    explain: 'Failing to stop and identify yourself at the scene of a crash where someone was injured or killed is a conviction that will result in suspension or revocation.',
    ref: 'Manual p. 28 – Conviction-Related Suspensions and Revocations'
  },
  {
    id: 'gC-034', topic: 'Suspension & Revocation',
    q: 'Taking a driver\'s license exam for another person will result in:',
    options: ['A warning letter from DMV.', 'Two demerit points.', 'Suspension or revocation of your driving privilege.', 'A $50 fine only.'],
    answer: 2,
    explain: 'The court or DMV will suspend or revoke your privilege if you are convicted of taking a license exam for another person.',
    ref: 'Manual p. 28 – Conviction-Related Suspensions and Revocations'
  },
  {
    id: 'gC-035', topic: 'Suspension & Revocation',
    q: 'Making a false statement to DMV:',
    options: ['Is only a civil matter with no license penalty.', 'Results in a driver improvement clinic only.', 'Is punished only if it involves insurance.', 'Will result in suspension or revocation of your driving privilege if convicted.'],
    answer: 3,
    explain: 'Making a false statement to DMV is listed among convictions for which the court or DMV will suspend or revoke your privilege.',
    ref: 'Manual p. 28 – Conviction-Related Suspensions and Revocations'
  },
  {
    id: 'gC-036', topic: 'Suspension & Revocation',
    q: 'The court may suspend or revoke your driving privilege if you are convicted of:',
    options: ['Reckless or aggressive driving.', 'Failing to update your voter registration.', 'Driving with a dirty windshield.', 'Not registering as an organ donor.'],
    answer: 0,
    explain: 'Reckless or aggressive driving is among offenses for which the court may suspend or revoke your privilege.',
    ref: 'Manual pp. 28–29 – Conviction-Related Suspensions and Revocations'
  },
  {
    id: 'gC-037', topic: 'Suspension & Revocation',
    q: 'Operating a vehicle without a required ignition interlock device will result in:',
    options: ['A fix-it ticket.', 'Suspension or revocation of your driving privilege.', 'A one-point deduction.', 'A requirement to retake the vision screening.'],
    answer: 1,
    explain: 'Operating a vehicle not equipped with an ignition interlock device when required by the court or DMV results in suspension or revocation.',
    ref: 'Manual p. 28 – Conviction-Related Suspensions and Revocations'
  },

  // ---------- Demerit Points & Driver Improvement ----------
  {
    id: 'gC-038', topic: 'Demerit Points',
    q: 'Traffic convictions in Virginia may be assigned how many demerit points?',
    options: ['One, two or three.', 'Two, five or eight.', 'Three, four or six.', 'Five, ten or fifteen.'],
    answer: 2,
    explain: 'DMV assigns three, four or six demerit points to traffic offenses and moving violations.',
    ref: 'Manual p. 29 – Driver Improvement Program'
  },
  {
    id: 'gC-039', topic: 'Demerit Points',
    q: 'DMV monitors the demerit points on your record within which time periods?',
    options: ['6-month and 12-month periods.', '24-month and 36-month periods.', '3-month and 6-month periods.', '12-month and 24-month periods.'],
    answer: 3,
    explain: 'DMV monitors how many demerit points you receive within a 12-month and 24-month period.',
    ref: 'Manual p. 29 – Driver Improvement Program'
  },
  {
    id: 'gC-040', topic: 'Demerit Points',
    q: 'If you are convicted of a demerit point violation committed when you were under age 18, DMV will:',
    options: ['Require you to complete a driver improvement clinic.', 'Revoke your license for one year.', 'Take no action on the first offense.', 'Require you to retake the knowledge exam.'],
    answer: 0,
    explain: 'For a first demerit point (or safety belt/child restraint) conviction committed under age 18, DMV requires a driver improvement clinic.',
    ref: 'Manual p. 29 – Driver Improvement Program'
  },
  {
    id: 'gC-041', topic: 'Demerit Points',
    q: 'A driver under 18 who is required to take a driver improvement clinic must complete it within how many days, or the license will be suspended?',
    options: ['30 days.', '90 days.', '60 days.', '180 days.'],
    answer: 1,
    explain: 'If you do not complete the clinic within 90 days, DMV will suspend your privilege until you complete it and pay a reinstatement fee.',
    ref: 'Manual p. 29 – Driver Improvement Program'
  },
  {
    id: 'gC-042', topic: 'Demerit Points',
    q: 'After a second conviction for a demerit point violation committed under age 18, DMV will:',
    options: ['Require a second driver improvement clinic.', 'Revoke your license until age 21.', 'Suspend your driving privilege for 90 days.', 'Add a daylight-only restriction.'],
    answer: 2,
    explain: 'A second demerit point (or safety belt/child restraint) conviction committed under age 18 results in a 90-day suspension.',
    ref: 'Manual p. 29 – Driver Improvement Program'
  },
  {
    id: 'gC-043', topic: 'Demerit Points',
    q: 'A third conviction for a demerit point violation committed under age 18 will result in revocation for:',
    options: ['90 days.', 'Six months.', 'Two years, regardless of age.', 'One year or until you reach age 18, whichever is longer.'],
    answer: 3,
    explain: 'The third conviction results in revocation for one year or until you reach age 18, whichever is longer.',
    ref: 'Manual p. 29 – Driver Improvement Program'
  },
  {
    id: 'gC-044', topic: 'Demerit Points',
    q: 'A 17-year-old convicted of a safety belt violation will be required by DMV to:',
    options: ['Complete a driver improvement clinic.', 'Pay a $500 fine.', 'Surrender the license for 30 days.', 'Retake the road skills test.'],
    answer: 0,
    explain: 'Safety belt and child restraint violations committed under age 18 are treated like demerit point violations and require a driver improvement clinic.',
    ref: 'Manual p. 29 – Driver Improvement Program'
  },
  {
    id: 'gC-045', topic: 'Demerit Points',
    q: 'If you are age 18 or 19 and convicted of a demerit point or safety belt violation, DMV will:',
    options: ['Suspend your license for 90 days.', 'Require you to complete a driver improvement clinic.', 'Take no action until you have 12 points.', 'Revoke your license for one year.'],
    answer: 1,
    explain: 'DMV requires a driver improvement clinic for a demerit point or safety belt/child restraint violation committed at age 18 or 19.',
    ref: 'Manual p. 29 – Driver Improvement Program'
  },
  {
    id: 'gC-046', topic: 'Demerit Points',
    q: 'A driver age 18 or older must complete a driver improvement clinic after accumulating:',
    options: ['6 points in 6 months or 12 points in 12 months.', '18 points in 12 months or 24 points in 24 months.', '12 points in 12 months or 18 points in 24 months.', '10 points in 12 months or 20 points in 24 months.'],
    answer: 2,
    explain: 'Drivers 18 or older must complete a clinic if they accumulate 12 demerit points within 12 months or 18 points within 24 months.',
    ref: 'Manual p. 29 – Driver Improvement Program'
  },
  {
    id: 'gC-047', topic: 'Demerit Points',
    q: 'If you receive 18 demerit points within 12 months or 24 points within 24 months, DMV will:',
    options: ['Revoke your license permanently.', 'Send you a warning letter.', 'Require a new vision screening.', 'Suspend your license for 90 days and require a driver improvement clinic.'],
    answer: 3,
    explain: 'DMV will suspend your driving privilege for 90 days and require you to complete a driver improvement clinic.',
    ref: 'Manual p. 29 – Other DMV Requirements, Suspensions and Revocations'
  },

  // ---------- Medical Review ----------
  {
    id: 'gC-048', topic: 'Medical Review',
    q: 'DMV\'s Medical Review Program is concerned with any condition that impairs a driver\'s:',
    options: ['Level of consciousness.', 'Judgment.', 'Motor skills.', 'All of these.'],
    answer: 3, fixedOrder: true,
    explain: 'DMV is concerned about any condition that impairs level of consciousness, perception (vision), judgment or motor skills.',
    ref: 'Manual p. 29 – Medical Review Program'
  },
  {
    id: 'gC-049', topic: 'Medical Review',
    q: 'After a medical review is completed, DMV may decide to:',
    options: ['Restrict your driving privilege.', 'Cancel your vehicle registration.', 'Increase your insurance premium.', 'Assign demerit points.'],
    answer: 0,
    explain: 'DMV may suspend or restrict your privilege, require periodic medical/vision reports, or end the review with no other requirements.',
    ref: 'Manual p. 29 – Medical Review Program'
  },
  {
    id: 'gC-050', topic: 'Medical Review',
    q: 'If your license is suspended only because of a medical review, to reinstate it you:',
    options: ['Must always present legal presence documents.', 'Generally do not need to present legal presence documents unless your license expires.', 'Must pass a new road skills test.', 'Must wait two years.'],
    answer: 1,
    explain: 'After a medical review suspension, legal presence documents are not required unless needed for another suspension/revocation or your license expires.',
    ref: 'Manual p. 29 – Medical Review Program'
  },

  // ---------- Insurance ----------
  {
    id: 'gC-051', topic: 'Insurance',
    q: 'To register a vehicle in Virginia, you must have liability insurance or pay an uninsured motor vehicle fee of:',
    options: ['$250.', '$600.', '$500.', '$1,000.'],
    answer: 2,
    explain: 'You must certify liability insurance coverage or pay the $500 uninsured motor vehicle fee.',
    ref: 'Manual p. 34 – Insurance Requirements'
  },
  {
    id: 'gC-052', topic: 'Insurance',
    q: 'Paying the uninsured motor vehicle fee:',
    options: ['Provides the same coverage as a liability policy.', 'Covers property damage only.', 'Lets you drive uninsured for the life of the vehicle.', 'Does not provide insurance, but lets you register and operate the vehicle for one year.'],
    answer: 3,
    explain: 'The fee does not provide insurance coverage; it allows you to register and operate the vehicle in Virginia for a one-year period.',
    ref: 'Manual p. 34 – Insurance Requirements'
  },
  {
    id: 'gC-053', topic: 'Insurance',
    q: 'For policies effective on or after January 1, 2022, the minimum liability coverage for injury or death of one person is:',
    options: ['$30,000.', '$25,000.', '$20,000.', '$60,000.'],
    answer: 0,
    explain: 'Policies effective on or after Jan. 1, 2022 must provide at least $30,000 for injury or death of one person.',
    ref: 'Manual p. 34 – Insurance Requirements'
  },
  {
    id: 'gC-054', topic: 'Insurance',
    q: 'For policies effective on or after January 1, 2022, the minimum liability coverage for injury or death of two or more people is:',
    options: ['$50,000.', '$60,000.', '$30,000.', '$100,000.'],
    answer: 1,
    explain: 'The minimum for injury or death of two or more people is $60,000 for policies effective on or after Jan. 1, 2022.',
    ref: 'Manual p. 34 – Insurance Requirements'
  },
  {
    id: 'gC-055', topic: 'Insurance',
    q: 'The minimum liability coverage required for property damage in Virginia is:',
    options: ['$10,000.', '$30,000.', '$20,000.', '$25,000.'],
    answer: 2,
    explain: 'The minimum property damage liability coverage is $20,000 for policies effective both before and after Jan. 1, 2022.',
    ref: 'Manual p. 34 – Insurance Requirements'
  },
  {
    id: 'gC-056', topic: 'Insurance',
    q: 'For policies effective before January 1, 2022, the minimum liability limits were:',
    options: ['$30,000 / $60,000 / $20,000.', '$20,000 / $40,000 / $15,000.', '$50,000 / $100,000 / $25,000.', '$25,000 / $50,000 / $20,000.'],
    answer: 3,
    explain: 'Before Jan. 1, 2022, minimums were $25,000 for one person, $50,000 for two or more, and $20,000 property damage.',
    ref: 'Manual p. 34 – Insurance Requirements'
  },
  {
    id: 'gC-057', topic: 'Insurance',
    q: 'If you are caught driving without insurance and did not pay the uninsured motor vehicle fee, DMV will suspend your privilege until you pay a noncompliance fee of:',
    options: ['$600.', '$500.', '$250.', '$1,000.'],
    answer: 0,
    explain: 'You must pay a $600 noncompliance fee (or be approved for a payment plan) and file a certificate of insurance.',
    ref: 'Manual p. 34 – Insurance Requirements'
  },
  {
    id: 'gC-058', topic: 'Insurance',
    q: 'After being suspended for driving uninsured, you must file a certificate of insurance for how long after regaining your driving privilege?',
    options: ['One year.', 'Three years.', 'Five years.', 'Six months.'],
    answer: 1,
    explain: 'You must file the certificate of insurance for three years from the date you regain your driving privileges.',
    ref: 'Manual p. 34 – Insurance Requirements'
  },
  {
    id: 'gC-059', topic: 'Insurance',
    q: 'Before you cancel the insurance on your Virginia-registered vehicle, you should:',
    options: ['Notify your local police department.', 'Remove the decals from your plates.', 'Return the license plates to DMV and cancel the registration.', 'Park the vehicle off the road.'],
    answer: 2,
    explain: 'Before you cancel your insurance, return the license plates to DMV and cancel the registration.',
    ref: 'Manual p. 34 – Insurance Requirements'
  },
  {
    id: 'gC-060', topic: 'Insurance',
    q: 'A Virginia-registered vehicle that is not being driven or is inoperable:',
    options: ['Does not need insurance.', 'Needs only property damage coverage.', 'Must be insured only if parked on a public street.', 'Must still be insured during the entire registration period.'],
    answer: 3,
    explain: 'Insure your vehicle during the entire registration period even if it is not driven or is inoperable.',
    ref: 'Manual p. 34 – Insurance Requirements'
  },
  {
    id: 'gC-061', topic: 'Insurance',
    q: 'Under the Insurance Monitoring Program, DMV will suspend your driving privilege if:',
    options: ['There is a break in your insurance coverage and you do not return your license plates.', 'You change insurance companies.', 'You add a teen driver to your policy.', 'Your premium increases.'],
    answer: 0,
    explain: 'DMV suspends your privilege if you do not verify coverage when asked, or if coverage lapses and you do not return your plates.',
    ref: 'Manual pp. 29–30 – Insurance Monitoring Program'
  },

  // ---------- Child Support ----------
  {
    id: 'gC-062', topic: 'Child Support Suspension',
    q: 'The Division of Child Support Enforcement will direct DMV to suspend your license if your child support payments are late by:',
    options: ['30 days or $1,000.', '90 days or $5,000.', '60 days or $2,500.', '180 days or $10,000.'],
    answer: 1,
    explain: 'Your privilege will be suspended if you are late on child support by 90 days or $5,000, or fail to appear in related hearings.',
    ref: 'Manual p. 30 – Suspensions for Failing to Satisfy Child Support-Related Requirements'
  },

  // ---------- Alcohol & the Law ----------
  {
    id: 'gC-063', topic: 'Alcohol & the Law',
    q: 'Under Virginia\'s implied consent law, by driving on Virginia\'s public roads you have agreed to:',
    options: ['Have your vehicle searched at any time.', 'Carry proof of insurance in the glove box.', 'Take a breath test upon request.', 'Stop at all sobriety checkpoints only during holidays.'],
    answer: 2,
    explain: 'Under implied consent laws, if you operate a vehicle on Virginia\'s public roads, you agree to take a breath test upon request.',
    ref: 'Manual p. 30 – Alcohol and the Law'
  },
  {
    id: 'gC-064', topic: 'Alcohol & the Law',
    q: 'If you are involved in a crash and an officer has probable cause, you can be arrested for DUI without a warrant within how long after the crash?',
    options: ['One hour.', 'Two hours.', 'Six hours.', 'Three hours.'],
    answer: 3,
    explain: 'You can be arrested for DUI within three hours of the crash without a warrant and at any location.',
    ref: 'Manual p. 30 – Alcohol and the Law'
  },
  {
    id: 'gC-065', topic: 'Alcohol & the Law',
    q: 'Your license will be automatically suspended under administrative license suspension if you are charged with DUI and your BAC is at least:',
    options: ['.08 percent.', '.05 percent.', '.02 percent.', '.10 percent.'],
    answer: 0,
    explain: 'If you refuse a breath test or your BAC is .08 percent or higher and you are charged with DUI, your privilege is automatically suspended.',
    ref: 'Manual p. 30 – Administrative License Suspension'
  },
  {
    id: 'gC-066', topic: 'Alcohol & the Law',
    q: 'For a first DUI offense, the administrative license suspension lasts:',
    options: ['24 hours.', 'Seven days.', '30 days.', '60 days.'],
    answer: 1,
    explain: 'The administrative suspension is seven days for a first offense.',
    ref: 'Manual p. 30 – Administrative License Suspension'
  },
  {
    id: 'gC-067', topic: 'Alcohol & the Law',
    q: 'For a second DUI offense, the administrative license suspension lasts:',
    options: ['Seven days.', 'Until the trial, however long that takes.', '60 days or until you go to trial, whichever comes first.', 'One year.'],
    answer: 2,
    explain: 'For a second offense the suspension is 60 days or until trial, whichever comes first.',
    ref: 'Manual p. 30 – Administrative License Suspension'
  },
  {
    id: 'gC-068', topic: 'Alcohol & the Law',
    q: 'For a third DUI offense, the administrative license suspension lasts:',
    options: ['Seven days.', '30 days.', '60 days.', 'Until the trial.'],
    answer: 3,
    explain: 'For a third DUI offense, the administrative suspension lasts until the trial.',
    ref: 'Manual p. 30 – Administrative License Suspension'
  },
  {
    id: 'gC-069', topic: 'Alcohol & the Law',
    q: 'Refusing a breath test when charged with DUI will:',
    options: ['Result in automatic administrative suspension of your driving privilege.', 'Prevent the officer from charging you.', 'Only result in a warning.', 'Delay any suspension until after trial.'],
    answer: 0,
    explain: 'Refusing a breath test when charged with DUI triggers the automatic administrative license suspension.',
    ref: 'Manual p. 30 – Administrative License Suspension'
  },
  {
    id: 'gC-070', topic: 'Alcohol & the Law',
    q: 'If you receive multiple DUI convictions, the suspension or revocation periods will:',
    options: ['Run at the same time.', 'Run consecutively.', 'Be reduced for good behavior.', 'Replace the administrative suspension.'],
    answer: 1,
    explain: 'With multiple DUI convictions, the suspension/revocation periods run consecutively, in addition to the administrative suspension.',
    ref: 'Manual p. 30 – Administrative License Suspension'
  },
  {
    id: 'gC-071', topic: 'Alcohol & the Law',
    q: 'For open container laws, the "passenger area" of a vehicle includes:',
    options: ['Only the back seat.', 'The locked trunk.', 'Any area within the driver\'s reach, including an unlocked glove compartment.', 'Only the cup holders.'],
    answer: 2,
    explain: 'The passenger area means the area that seats the driver and passengers and any area within the driver\'s reach, including an unlocked glove compartment.',
    ref: 'Manual p. 30 – Open Alcohol Containers in Vehicles'
  },
  {
    id: 'gC-072', topic: 'Alcohol & the Law',
    q: 'You may be charged with drinking while operating a motor vehicle if you have an open, partially consumed container of alcohol in the passenger area and:',
    options: ['The container is a beer can.', 'You are driving after midnight.', 'A passenger is under age 21.', 'You show signs that you have been drinking.'],
    answer: 3,
    explain: 'The charge applies when there is a partially emptied open container in the passenger area and you show signs that you have been drinking.',
    ref: 'Manual p. 30 – Open Alcohol Containers in Vehicles'
  },
  {
    id: 'gC-073', topic: 'Alcohol & the Law',
    q: 'A DUI conviction with a passenger age 17 or younger in the vehicle carries an additional mandatory jail term of:',
    options: ['Five days.', 'Two days.', '10 days.', '30 days.'],
    answer: 0,
    explain: 'A DUI involving a juvenile passenger carries an additional mandatory five-day jail term plus all other penalties.',
    ref: 'Manual p. 30 – Transporting Children While Under the Influence of Alcohol/Drugs'
  },
  {
    id: 'gC-074', topic: 'Alcohol & the Law',
    q: 'A driver convicted of DUI with a juvenile passenger may be charged an additional fine of:',
    options: ['$100 to $250.', 'At least $500 and up to $1,000.', 'Up to $2,500.', 'Exactly $50.'],
    answer: 1,
    explain: 'You may be charged an additional fine of at least $500 and up to $1,000.',
    ref: 'Manual p. 30 – Transporting Children While Under the Influence of Alcohol/Drugs'
  },
  {
    id: 'gC-075', topic: 'Alcohol & the Law',
    q: 'A second DUI offense with a juvenile in the vehicle carries an additional community service requirement of:',
    options: ['50 hours.', '40 hours.', '80 hours.', '100 hours.'],
    answer: 2,
    explain: 'A second DUI with a juvenile in the vehicle carries an additional 80-hour community service requirement.',
    ref: 'Manual p. 30 – Transporting Children While Under the Influence of Alcohol/Drugs'
  },
  {
    id: 'gC-076', topic: 'Alcohol & the Law',
    q: 'If you are caught driving while your license is suspended for an alcohol-related offense, your vehicle will be impounded immediately for:',
    options: ['Three days.', '7 days.', '90 days.', '30 days.'],
    answer: 3,
    explain: 'Your vehicle will be impounded immediately for 30 days if you drive after an alcohol-related suspension.',
    ref: 'Manual p. 30 – Vehicle Impoundment'
  },
  {
    id: 'gC-077', topic: 'Alcohol & the Law',
    q: 'If convicted of driving while suspended for an alcohol-related offense, the court can impound your vehicle for an additional:',
    options: ['90 days.', '30 days.', '60 days.', 'One year.'],
    answer: 0,
    explain: 'After the immediate 30-day impoundment, the court can impound the vehicle for an additional 90 days upon conviction.',
    ref: 'Manual p. 30 – Vehicle Impoundment'
  },
  {
    id: 'gC-078', topic: 'Alcohol & the Law',
    q: 'If you drive without a license after a previous conviction for driving without a license, your vehicle will be impounded:',
    options: ['For 30 days.', 'Until you obtain a license or for three days, whichever is less.', 'Until your trial date.', 'For 90 days.'],
    answer: 1,
    explain: 'The vehicle remains impounded until you obtain a license or for three days, whichever is less.',
    ref: 'Manual p. 30 – Vehicle Impoundment'
  },
  {
    id: 'gC-079', topic: 'Alcohol & the Law',
    q: 'Depending on the locality, a driver convicted of DUI may have to pay restitution for emergency response costs of up to:',
    options: ['$500.', '$2,500.', '$1,000.', '$5,000.'],
    answer: 2,
    explain: 'You may be responsible for paying the cost, up to $1,000, for police, EMS, firefighters and rescue personnel responding to your DUI crash or incident.',
    ref: 'Manual p. 30 – Restitution'
  },

  // ---------- Underage Alcohol ----------
  {
    id: 'gC-080', topic: 'Underage Alcohol',
    q: 'A driver under age 21 is convicted of driving after illegally consuming alcohol with a BAC of at least .02 but less than .08 percent. The court will suspend the license for:',
    options: ['Six months.', '90 days.', 'Until age 21.', 'One year from the date of conviction.'],
    answer: 3,
    explain: 'The penalty includes a one-year suspension from the date of conviction plus a $500 minimum fine or at least 50 hours of community service.',
    ref: 'Manual p. 30 – Alcohol Related Violations and Penalties Involving Persons Under Age 21'
  },
  {
    id: 'gC-081', topic: 'Underage Alcohol',
    q: 'For drivers under age 21, the lowest BAC at which the underage "driving after illegally consuming alcohol" penalties apply is:',
    options: ['.02 percent.', '.05 percent.', '.08 percent.', '.01 percent.'],
    answer: 0,
    explain: 'Penalties apply to underage drivers convicted with a BAC of at least .02 percent and less than .08 percent; Virginia has zero tolerance for underage drinking.',
    ref: 'Manual p. 30 – Alcohol Related Violations and Penalties Involving Persons Under Age 21'
  },
  {
    id: 'gC-082', topic: 'Underage Alcohol',
    q: 'Besides a one-year suspension, an underage driver convicted with a BAC of .02 to under .08 percent faces:',
    options: ['A $100 fine or 10 hours of community service.', 'A minimum $500 fine or at least 50 hours of community service.', 'A $2,500 fine and 12 months in jail.', 'Only a written warning.'],
    answer: 1,
    explain: 'The court penalty includes a minimum mandatory fine of $500, or at least 50 hours of community service.',
    ref: 'Manual p. 30 – Alcohol Related Violations and Penalties Involving Persons Under Age 21'
  },
  {
    id: 'gC-083', topic: 'Underage Alcohol',
    q: 'If a driver under 21 is convicted of driving after illegally consuming alcohol with a BAC of .08 percent or higher, the driver:',
    options: ['Receives only a warning.', 'Must complete a clinic but keeps the license.', 'May face the same penalties as an adult.', 'Pays a $50 fine.'],
    answer: 2,
    explain: 'With a BAC of .08 percent or higher, an underage driver may face the same penalties as an adult.',
    ref: 'Manual p. 31 – Alcohol Related Violations and Penalties Involving Persons Under Age 21'
  },
  {
    id: 'gC-084', topic: 'Underage Alcohol',
    q: 'If you provide or sell alcohol to a person under 21, you may be fined up to:',
    options: ['$500.', '$1,000.', '$5,000.', '$2,500.'],
    answer: 3,
    explain: 'Providing alcohol to someone under 21 can bring a fine up to $2,500, license suspension up to one year, and 12 months in jail.',
    ref: 'Manual p. 31 – Alcohol Related Violations and Penalties Involving Persons Under Age 21'
  },
  {
    id: 'gC-085', topic: 'Underage Alcohol',
    q: 'A person under 21 who uses a fake ID to try to buy alcohol faces mandatory license suspension of:',
    options: ['At least six months but not more than one year.', 'Exactly 30 days.', 'At least two years.', 'Until age 21.'],
    answer: 0,
    explain: 'Misrepresentation of age brings mandatory suspension of at least six months but not more than one year, along with fines and community service.',
    ref: 'Manual p. 31 – Alcohol Related Violations and Penalties Involving Persons Under Age 21'
  },
  {
    id: 'gC-086', topic: 'Underage Alcohol',
    q: 'If you are under 21 and use a fake ID to purchase alcohol, you will:',
    options: ['Be fined at least $500.', 'Perform at least 50 hours of community service.', 'Face up to 12 months in jail.', 'All of these.'],
    answer: 3, fixedOrder: true,
    explain: 'Misrepresentation of age carries a fine of at least $500, at least 50 hours of community service, up to 12 months in jail and license suspension.',
    ref: 'Manual p. 31 – Alcohol Related Violations and Penalties Involving Persons Under Age 21'
  },

  // ---------- License Types ----------
  {
    id: 'gC-087', topic: 'Learner\'s Permit',
    q: 'A learner\'s permit holder may drive when a licensed driver at least how old is seated in the front passenger seat?',
    options: ['18.', '21.', '25.', '16.'],
    answer: 1,
    explain: 'A learner\'s permit allows you to drive when a licensed driver at least 21 years of age is in the front passenger seat.',
    ref: 'Manual p. 31 – Learner\'s Permit'
  },
  {
    id: 'gC-088', topic: 'Learner\'s Permit',
    q: 'A licensed driver who is 18, 19 or 20 may supervise a learner\'s permit holder only if he or she is the permit holder\'s:',
    options: ['Classmate.', 'Neighbor.', 'Legal guardian, brother, sister, half-sibling or step-sibling.', 'Coworker.'],
    answer: 2,
    explain: 'The supervising driver may be 18, 19 or 20 if he or she is your legal guardian, brother, sister, half-brother, half-sister, stepbrother or stepsister.',
    ref: 'Manual p. 31 – Learner\'s Permit'
  },
  {
    id: 'gC-089', topic: 'Learner\'s Permit',
    q: 'If you are age 19 or older, before applying for a driver\'s license you must hold a learner\'s permit for:',
    options: ['30 days.', '90 days.', '9 months.', '60 days, or present a driver\'s education certificate of completion.'],
    answer: 3,
    explain: 'Applicants age 19 or older must hold a learner\'s permit for 60 days or present a driver education certificate of completion.',
    ref: 'Manual p. 31 – Learner\'s Permit'
  },
  {
    id: 'gC-090', topic: 'Learner\'s Permit',
    q: 'The licensed driver supervising a learner\'s permit holder must:',
    options: ['Hold a valid license and be alert and able to assist.', 'Sit in the back seat.', 'Be a certified driving instructor.', 'Hold a commercial driver\'s license.'],
    answer: 0,
    explain: 'The supervising driver must hold a valid driver\'s license and be alert and able to assist you while you are driving.',
    ref: 'Manual p. 31 – Learner\'s Permit'
  },
  {
    id: 'gC-091', topic: 'License Types',
    q: 'A regular Virginia driver\'s license allows you to operate any vehicle or small truck exempt from CDL requirements that weighs less than:',
    options: ['10,001 pounds.', '26,001 pounds.', '16,001 pounds.', '33,001 pounds.'],
    answer: 1,
    explain: 'A driver\'s license allows you to operate any vehicle or small truck less than 26,001 pounds that is exempt from CDL requirements.',
    ref: 'Manual p. 32 – Driver\'s License'
  },
  {
    id: 'gC-092', topic: 'License Types',
    q: 'A commercial driver\'s license (CDL) is required to drive a school bus designed to carry:',
    options: ['8 or more occupants.', '12 or more occupants.', '16 or more occupants, including the driver.', '20 or more occupants, not counting the driver.'],
    answer: 2,
    explain: 'A CDL allows you to operate tractor-trailers, passenger buses, tank vehicles, hazardous materials vehicles, and school buses for 16 or more occupants including the driver.',
    ref: 'Manual p. 32 – Commercial Driver\'s License'
  },
  {
    id: 'gC-093', topic: 'License Types',
    q: 'To drive a school bus designed to carry 15 occupants (including the driver), you need:',
    options: ['A full commercial driver\'s license.', 'Only a regular driver\'s license.', 'An international driver\'s license.', 'A school bus endorsement on your driver\'s license.'],
    answer: 3,
    explain: 'You do not need a CDL, but you must pass the commercial driver and school bus tests to obtain a school bus endorsement, restricted to 15-occupant buses.',
    ref: 'Manual p. 32 – School Bus Driver\'s License'
  },
  {
    id: 'gC-094', topic: 'License Types',
    q: 'An international driver\'s license:',
    options: ['Is only a translation of your valid license for use when traveling outside the U.S.', 'Replaces your Virginia license in all states.', 'Can be bought from any private business.', 'Is issued by DMV customer service centers.'],
    answer: 0,
    explain: 'An international driver\'s license is not a valid license; it is a foreign translation of your existing license, issued by your local AAA.',
    ref: 'Manual p. 33 – International Driver\'s License'
  },
  {
    id: 'gC-095', topic: 'License Types',
    q: 'A visitor to the U.S. from a foreign country may drive in Virginia using:',
    options: ['Only a Virginia learner\'s permit.', 'Their home country driver\'s license, accompanied by a translation.', 'A passport alone.', 'An international license bought online.'],
    answer: 1,
    explain: 'Foreign visitors may drive using their home country license, which should be accompanied by a translation.',
    ref: 'Manual p. 33 – International Driver\'s License'
  },
  {
    id: 'gC-096', topic: 'License Types',
    q: 'Selling any document that claims to be a driver\'s license, such as a privately marketed "international license," is:',
    options: ['Legal with a business license.', 'A traffic infraction.', 'A Class 1 misdemeanor.', 'A felony.'],
    answer: 2,
    explain: 'International licenses marketed by private businesses are not valid, and sale of any document claiming to be a driver\'s license is a Class 1 misdemeanor.',
    ref: 'Manual p. 33 – International Driver\'s License'
  },

  // ---------- Licensing & Registration ----------
  {
    id: 'gC-097', topic: 'Licensing & Registration',
    q: 'How will you receive your new Virginia driver\'s license?',
    options: ['At the DMV counter after your test.', 'From your driving school.', 'By picking it up at the police station.', 'In the mail.'],
    answer: 3,
    explain: 'For security, DMV does not issue licenses in customer service centers; you will receive your license in the mail.',
    ref: 'Manual p. 33 – Receiving License by Mail'
  },
  {
    id: 'gC-098', topic: 'Licensing & Registration',
    q: 'If you move, you must notify DMV of your new address within:',
    options: ['30 days.', '10 days.', '60 days.', '90 days.'],
    answer: 0,
    explain: 'If you move, you are required to notify DMV within 30 days; the postal service will not forward your license.',
    ref: 'Manual p. 33 – Address Changes'
  },
  {
    id: 'gC-099', topic: 'Licensing & Registration',
    q: 'A new Virginia resident who drives must obtain a Virginia driver\'s license within:',
    options: ['30 days.', '60 days.', '90 days.', 'Six months.'],
    answer: 1,
    explain: 'New residents who drive must obtain a Virginia driver\'s license within 60 days of moving to Virginia.',
    ref: 'Manual p. 33 – New to Virginia'
  },
  {
    id: 'gC-100', topic: 'Licensing & Registration',
    q: 'After moving to Virginia, you must title and register your vehicle and get Virginia license plates within:',
    options: ['10 days.', '60 days.', '30 days.', '90 days.'],
    answer: 2,
    explain: 'Title and register your vehicle and obtain Virginia license plates within 30 days of moving to Virginia.',
    ref: 'Manual p. 33 – Titles, Registrations, License Plates, Decals'
  },
  {
    id: 'gC-101', topic: 'Licensing & Registration',
    q: 'Virginia license plates must be displayed:',
    options: ['On the rear of the vehicle only.', 'On the front of the vehicle only.', 'Inside the rear window.', 'On the front and rear of the vehicle.'],
    answer: 3,
    explain: 'License plates must be displayed on the front and rear of the vehicle.',
    ref: 'Manual p. 33 – Titles, Registrations, License Plates, Decals'
  },
  {
    id: 'gC-102', topic: 'Licensing & Registration',
    q: 'The decals placed on your license plates show:',
    options: ['The month and year your registration expires.', 'The date of your last safety inspection.', 'Your insurance company.', 'The county where you live.'],
    answer: 0,
    explain: 'Decals indicating the month and year the registration expires must be placed in the designated areas on the plates.',
    ref: 'Manual p. 33 – Titles, Registrations, License Plates, Decals'
  },
  {
    id: 'gC-103', topic: 'Licensing & Registration',
    q: 'When operating your vehicle, you must have with you:',
    options: ['The vehicle title.', 'The vehicle registration card.', 'Your bill of sale.', 'Your last inspection receipt.'],
    answer: 1,
    explain: 'You must have the vehicle registration card with you when operating the vehicle.',
    ref: 'Manual p. 33 – Titles, Registrations, License Plates, Decals'
  },

  // ---------- Vehicle Inspections ----------
  {
    id: 'gC-104', topic: 'Vehicle Inspections',
    q: 'How often must your vehicle pass a Virginia safety inspection?',
    options: ['Every two years.', 'Only when sold.', 'Every year.', 'Every five years.'],
    answer: 2,
    explain: 'Your vehicle must pass an annual safety inspection and display a valid inspection sticker; some localities also require emissions inspection.',
    ref: 'Manual p. 33 – Safety Inspections'
  },
  {
    id: 'gC-105', topic: 'Vehicle Inspections',
    q: 'The manual recommends checking your tires with the penny test:',
    options: ['Once a year at inspection.', 'Only after a flat tire.', 'Every time you buy gas.', 'Once every month, or before a long road trip.'],
    answer: 3,
    explain: 'Once every month, or before a long road trip, check your tires for wear and damage using the penny test.',
    ref: 'Manual p. 33 – Tire Safety Inspection'
  },
  {
    id: 'gC-106', topic: 'Vehicle Inspections',
    q: 'When doing the penny test with Lincoln\'s head placed in a tread groove, your tire has a safe amount of tread if:',
    options: ['Any part of Lincoln\'s head is covered by the tread.', 'You can see all of Lincoln\'s head.', 'The penny falls out of the groove.', 'Only the top of the penny shows.'],
    answer: 0,
    explain: 'If any part of Lincoln\'s head is covered by the tread, you are driving with a safe amount of tread.',
    ref: 'Manual p. 34 – Tire Safety Inspection'
  },
  {
    id: 'gC-107', topic: 'Vehicle Inspections',
    q: 'Where can you find the recommended tire pressure (PSI) for your vehicle?',
    options: ['On the tire sidewall only.', 'In the owner\'s manual or on the driver\'s side door jamb.', 'On your registration card.', 'On the inspection sticker.'],
    answer: 1,
    explain: 'The recommended PSI is located in the vehicle owner\'s manual or on the driver\'s side door jamb.',
    ref: 'Manual p. 34 – Tire Safety Inspection'
  },

  // ---------- Voting & Organ Donation ----------
  {
    id: 'gC-108', topic: 'Voting & Organ Donation',
    q: 'To apply to register to vote in Virginia at DMV, you must be a U.S. citizen, a Virginia resident, and:',
    options: ['At least 16 years old.', 'A licensed driver.', 'At least 18 years old by the next general election.', 'At least 21 years old.'],
    answer: 2,
    explain: 'You must be a U.S. citizen, a resident of Virginia, and at least 18 years old by the next general election.',
    ref: 'Manual p. 34 – Applying to Register to Vote'
  },
  {
    id: 'gC-109', topic: 'Voting & Organ Donation',
    q: 'If you are under age 18 and check "yes" to be an organ donor on your license application:',
    options: ['Your decision is final and cannot be changed.', 'DMV will reject the application.', 'You must also have a doctor sign the form.', 'By law, your parents or guardians make the final decision.'],
    answer: 3,
    explain: 'Donors under 18 can indicate their wishes, but by law parents and guardians must make the final decision; decisions of those 18 or older are honored.',
    ref: 'Manual p. 34 – Organ, Eye and Tissue Donation'
  },

  // ---------- Testing & Vision ----------
  {
    id: 'gC-110', topic: 'Testing & Vision',
    q: 'If you are under 18 and fail the knowledge exam on January 1, the earliest date you can retake it is:',
    options: ['January 17.', 'January 2.', 'January 15.', 'January 31.'],
    answer: 0,
    explain: 'Applicants under 18 must wait a full 15 days before retaking the exam; failing on January 1 means the earliest retake is January 17.',
    ref: 'Manual p. 3 – Two-Part Knowledge Exam'
  },
  {
    id: 'gC-111', topic: 'Testing & Vision',
    q: 'To pass part two of the knowledge exam, you must answer at least what percentage of the questions correctly?',
    options: ['70 percent.', '80 percent.', '75 percent.', '100 percent.'],
    answer: 1,
    explain: 'You must answer all ten sign questions in part one and at least 80 percent of the general knowledge questions in part two.',
    ref: 'Manual p. 3 – Two-Part Knowledge Exam'
  },
  {
    id: 'gC-112', topic: 'Testing & Vision',
    q: 'If you fail the knowledge exam three times, before taking it a fourth time you must:',
    options: ['Wait six months.', 'Pay a $100 retest fee.', 'Complete and pass the classroom part of driver education or an approved 8-hour manual course.', 'Hold a learner\'s permit for one year.'],
    answer: 2,
    explain: 'After three failures you must complete and pass the classroom component of driver education, or the approved 8-hour course based on the Virginia Driver\'s Manual where eligible.',
    ref: 'Manual p. 3 – Section 1: Testing'
  },
  {
    id: 'gC-113', topic: 'Testing & Vision',
    q: 'If you fail the road skills test, you must wait how long before taking it again?',
    options: ['15 days.', 'One week.', 'One day.', 'Two days.'],
    answer: 3,
    explain: 'The road skills test may be taken once per business day, and after failing you must wait two days to take it again.',
    ref: 'Manual p. 4 – Road Skills Test'
  },
  {
    id: 'gC-114', topic: 'Testing & Vision',
    q: 'Applicants age 18 or older who do not take driver\'s education must hold a learner\'s permit for how long before the first road skills test?',
    options: ['60 days.', '30 days.', '9 months.', '15 days.'],
    answer: 0,
    explain: 'Applicants 18 or older must hold the learner\'s permit for 60 days prior to the first road skills test or complete an approved driver education course.',
    ref: 'Manual p. 4 – Road Skills Test'
  },
  {
    id: 'gC-115', topic: 'Testing & Vision',
    q: 'To qualify for an unrestricted driver\'s license, you must have vision of at least:',
    options: ['20/70 in both eyes and 70 degrees horizontal vision.', '20/40 in one or both eyes and 110 degrees horizontal vision.', '20/20 in both eyes and 140 degrees horizontal vision.', '20/50 in one eye and 90 degrees horizontal vision.'],
    answer: 1,
    explain: 'An unrestricted license requires 20/40 or better vision in one or both eyes and 110 degrees or better horizontal vision.',
    ref: 'Manual p. 4 – Vision Standards'
  },
  {
    id: 'gC-116', topic: 'Testing & Vision',
    q: 'To qualify for a license restricted to daylight driving, you must have vision of at least:',
    options: ['20/40 and 110 degrees horizontal vision.', '20/100 and 50 degrees horizontal vision.', '20/70 and 70 degrees horizontal vision.', '20/60 and 90 degrees horizontal vision.'],
    answer: 2,
    explain: 'Daylight-only driving requires 20/70 or better vision in one or both eyes and 70 degrees or better horizontal vision.',
    ref: 'Manual p. 4 – Vision Standards'
  },
  {
    id: 'gC-117', topic: 'Testing & Vision',
    q: 'A daylight-only restricted license allows you to drive:',
    options: ['From sunrise to sunset.', 'From 6 a.m. to 6 p.m.', 'Only when headlights are not needed.', 'From a half-hour after sunrise to a half-hour before sunset.'],
    answer: 3,
    explain: 'A daylight driving only license permits driving beginning a half-hour after sunrise and ending a half-hour before sunset.',
    ref: 'Manual p. 4 – Vision Standards'
  },
  {
    id: 'gC-118', topic: 'Testing & Vision',
    q: 'If you need glasses or contact lenses to pass the vision screening, your license will show which restriction?',
    options: ['C.', 'B.', 'D.', 'L.'],
    answer: 0,
    explain: 'You must wear corrective lenses when driving, and your license will display a C for this restriction.',
    ref: 'Manual p. 4 – Vision Screening'
  },
  {
    id: 'gC-119', topic: 'Testing & Vision',
    q: 'How often may you take the knowledge exam?',
    options: ['Once per week.', 'Only once per business day.', 'Twice per business day.', 'Once every 15 days, regardless of age.'],
    answer: 1,
    explain: 'The exam may be taken only once per business day; applicants under 18 must also wait a full 15 days after failing.',
    ref: 'Manual p. 3 – Section 1: Testing'
  },
  {
    id: 'gC-120', topic: 'Testing & Vision',
    q: 'During the knowledge exam, you are NOT allowed to:',
    options: ['Take the audio version of the exam.', 'Ask DMV staff for help with special needs.', 'Use a cell phone.', 'Take the exam in another language.'],
    answer: 2,
    explain: 'When testing you cannot get or give help, obtain questions beforehand, or use a cell phone; audio and other-language versions are offered.',
    ref: 'Manual p. 3 – Section 1: Testing'
  }
]);
