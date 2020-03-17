
import BT1 from '../img/22RenwickSt/B1.jpg'
import R1 from '../img/22RenwickSt/R1.jpg'
import R2 from '../img/22RenwickSt/R2.jpg'
import R3 from '../img/22RenwickSt/R3.jpg'
import R4 from '../img/22RenwickSt/R4.jpg'
import R5 from '../img/22RenwickSt/R5.jpg'

import E1 from '../img/137E25thSt/E1.jpg'
import E2 from '../img/137E25thSt/E2.jpg'
import E3 from '../img/137E25thSt/E3.jpg'
import E4 from '../img/137E25thSt/E4.jpg'
import E5 from '../img/137E25thSt/E5.jpg'

import F1 from '../img/151FenimoreRd/F1.jpg'
import F2 from '../img/151FenimoreRd/F2.jpg'
import F3 from '../img/151FenimoreRd/F3.jpg'
import F4 from '../img/151FenimoreRd/F4.jpg'
import F5 from '../img/151FenimoreRd/F5.jpg'

import S1 from '../img/201SeminaryAve/S1.jpg'
import S2 from '../img/201SeminaryAve/S2.jpg'
import S3 from '../img/201SeminaryAve/S3.jpg'
import S4 from '../img/201SeminaryAve/S4.jpg'
import S5 from '../img/201SeminaryAve/S5.jpg'

import H1 from '../img/300HarmonMeadowBlvd/H1.jpg'
import H2 from '../img/300HarmonMeadowBlvd/H2.jpg'
import H3 from '../img/300HarmonMeadowBlvd/H3.jpg'
import H4 from '../img/300HarmonMeadowBlvd/H4.jpg'
import H5 from '../img/300HarmonMeadowBlvd/H5.jpg'

import B1 from '../img/666Broadway/B1.jpg'
import B2 from '../img/666Broadway/B2.jpg'
import B3 from '../img/666Broadway/B3.jpg'
import B4 from '../img/666Broadway/B4.jpg'
import B5 from '../img/666Broadway/B5.jpg'

import I1 from '../img/1118IntervaleAve/I1.jpg'
import I2 from '../img/1118IntervaleAve/I3.jpg'
import I3 from '../img/1118IntervaleAve/I3.jpg'
import I4 from '../img/1118IntervaleAve/I4.jpg'
import I5 from '../img/1118IntervaleAve/I5.jpg'

import A1 from '../img/AlbertEinstineCollegeofMedicine/A1.jpg'
import A2 from '../img/AlbertEinstineCollegeofMedicine/A2.jpg'
import A3 from '../img/AlbertEinstineCollegeofMedicine/A3.jpg'
import A4 from '../img/AlbertEinstineCollegeofMedicine/A4.jpg'
import A5 from '../img/AlbertEinstineCollegeofMedicine/A5.jpg'

import W1 from '../img/202W40thSt/W1.jpg'
import W2 from '../img/202W40thSt/W2.jpg'
import W3 from '../img/202W40thSt/W3.jpg'
import W4 from '../img/202W40thSt/W4.jpg'


import T1 from '../img/TwoTowerCenterBlvd/T1.jpg'
import T2 from '../img/TwoTowerCenterBlvd/T2.jpg'
import T3 from '../img/TwoTowerCenterBlvd/T3.jpg'
import T4 from '../img/TwoTowerCenterBlvd/T4.jpg'
import T5 from '../img/TwoTowerCenterBlvd/T5.jpg'


const initState = {
    posts : [
        {id: '1', title:'22 Renwick Street', building: BT1,
         map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.683510727542!2d-74.0104880845947!3d40.724983179330465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259f36953ce19%3A0x72e5d5c49e7132e5!2s22%20Renwick%20St%2C%20New%20York%2C%20NY%2010013!5e0!3m2!1sen!2sus!4v1584054783214!5m2!1sen!2sus",
         body: 'We Out Here', pics: [R1,R2,R3,R4,R5] },

        {id: '2', title:'137E 25th Street', building: BT1,
         map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.962119342239!2d-73.98533068522617!3d40.740859043787566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a75799ff49%3A0x5420ec3f22228643!2s137%20E%2025th%20St%2C%20New%20York%2C%20NY%2010010!5e0!3m2!1sen!2sus!4v1584055155105!5m2!1sen!2sus",
         body: 'We In Here', pics: [E1,E2,E3,E4,E5] },

        {id: '3', title:'151 Fenimore Rd', building: BT1,
         map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.962119342239!2d-73.98533068522617!3d40.740859043787566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a75799ff49%3A0x5420ec3f22228643!2s137%20E%2025th%20St%2C%20New%20York%2C%20NY%2010010!5e0!3m2!1sen!2sus!4v1584055155105!5m2!1sen!2sus",
         body: 'We Live Here', pics: [F1,F2,F3,F4,F5] },

         {id: '4', title:'201 Seminary Ave', building: BT1,
         map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.962119342239!2d-73.98533068522617!3d40.740859043787566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a75799ff49%3A0x5420ec3f22228643!2s137%20E%2025th%20St%2C%20New%20York%2C%20NY%2010010!5e0!3m2!1sen!2sus!4v1584055155105!5m2!1sen!2sus",
         body: 'We Out Here', pics: [S1,S2,S3,S4,S5] },
         
        {id: '5', title:'300 Harmon Meadow Blvd', building: BT1,
         map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.962119342239!2d-73.98533068522617!3d40.740859043787566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a75799ff49%3A0x5420ec3f22228643!2s137%20E%2025th%20St%2C%20New%20York%2C%20NY%2010010!5e0!3m2!1sen!2sus!4v1584055155105!5m2!1sen!2sus",
         body: 'We In Here', pics: [H1,H2,H3,H4,H5] },

        {id: '6', title:'666 Broadway', building: BT1,
         map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.962119342239!2d-73.98533068522617!3d40.740859043787566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a75799ff49%3A0x5420ec3f22228643!2s137%20E%2025th%20St%2C%20New%20York%2C%20NY%2010010!5e0!3m2!1sen!2sus!4v1584055155105!5m2!1sen!2sus",
         body: 'We Live Here', pics: [B1,B2,B3,B4,B5] },

         {id: '7', title:'1118 Intervale Ave', building: BT1,
         map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.962119342239!2d-73.98533068522617!3d40.740859043787566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a75799ff49%3A0x5420ec3f22228643!2s137%20E%2025th%20St%2C%20New%20York%2C%20NY%2010010!5e0!3m2!1sen!2sus!4v1584055155105!5m2!1sen!2sus",
         body: 'We Out Here', pics: [I1,I2,I3,I4,I5] },

        {id: '8', title:'Albert Einstine College of Medicine', building: BT1,
         map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.962119342239!2d-73.98533068522617!3d40.740859043787566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a75799ff49%3A0x5420ec3f22228643!2s137%20E%2025th%20St%2C%20New%20York%2C%20NY%2010010!5e0!3m2!1sen!2sus!4v1584055155105!5m2!1sen!2sus",
         body: 'We In Here', pics: [A1,A2,A3,A4,A5] },

        {id: '9', title:'202 W 40th St', building: BT1,
         map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.962119342239!2d-73.98533068522617!3d40.740859043787566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a75799ff49%3A0x5420ec3f22228643!2s137%20E%2025th%20St%2C%20New%20York%2C%20NY%2010010!5e0!3m2!1sen!2sus!4v1584055155105!5m2!1sen!2sus",
         body: 'We Live Here', pics: [W1,W2,W3,W4,] },

         {id: '10', title:'Two Tower Center Blvd', building: BT1,
         map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.962119342239!2d-73.98533068522617!3d40.740859043787566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a75799ff49%3A0x5420ec3f22228643!2s137%20E%2025th%20St%2C%20New%20York%2C%20NY%2010010!5e0!3m2!1sen!2sus!4v1584055155105!5m2!1sen!2sus",
         body: 'We Out Here', pics: [T1,T2,T3,T4,T5] }
       

    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer