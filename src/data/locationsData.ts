export interface StateLocationData {
  state: string;
  tier2: string[];
  tier3_4: string[];
}

export const TOP_FOOTER_DOMESTIC_LOCATIONS = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad', 'Pune', 'Noida', 'Gurgaon',
  'Jaipur', 'Dehradun', 'Uttarakhand', 'Chandigarh', 'Lucknow', 'Surat', 'Indore', 'Nagpur', 'Kochi', 'Coimbatore',
  'Ghaziabad', 'Faridabad', 'Thane', 'Navi Mumbai', 'Bhopal', 'Visakhapatnam', 'Patna', 'Bhubaneswar', 'Vadodara',
  'Rajkot', 'Ludhiana', 'Amritsar', 'Kanpur', 'Varanasi', 'Agra', 'Nashik', 'Mysuru', 'Mangalore', 'Goa',
  'Guwahati', 'Raipur', 'Ranchi', 'Jodhpur', 'Udaipur', 'Vijayawada', 'Thiruvananthapuram', 'Madurai', 'Meerut',
  'Moradabad', 'Prayagraj', 'Jammu', 'Gwalior', 'Gorakhpur', 'Ajmer', 'Kota', 'Jabalpur', 'Solapur', 'Kolhapur'
];

export const TOP_FOOTER_INTERNATIONAL_LOCATIONS = [
  'USA', 'Australia', 'UK', 'Canada', 'Dubai', 'Singapore', 'Malaysia'
];

export const REGIONAL_FOOTER_LOCATIONS = [
  {
    title: '⭐ Major Metros & Tech Hubs',
    locations: ['Mumbai', 'Delhi NCR', 'Noida', 'Gurgaon', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Chandigarh', 'Lucknow', 'Surat', 'Indore', 'Kochi', 'Bhopal', 'Patna', 'Bhubaneswar', 'Coimbatore', 'Nagpur', 'Varanasi', 'Goa']
  },
  {
    title: '🏛️ North & Central India',
    locations: ['Agra', 'Kanpur', 'Prayagraj', 'Gorakhpur', 'Meerut', 'Ghaziabad', 'Faridabad', 'Panipat', 'Rohtak', 'Hisar', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Gwalior', 'Jabalpur', 'Ujjain', 'Jodhpur', 'Udaipur', 'Kota', 'Dehradun', 'Haridwar', 'Haldwani', 'Shimla', 'Dharamshala', 'Solan']
  },
  {
    title: '🌴 West & South India',
    locations: ['Thane', 'Navi Mumbai', 'Nashik', 'Aurangabad', 'Kolhapur', 'Solapur', 'Rajkot', 'Vadodara', 'Bhavnagar', 'Jamnagar', 'Mysuru', 'Mangaluru', 'Hubballi', 'Belagavi', 'Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Warangal', 'Karimnagar', 'Madurai', 'Tiruchirappalli', 'Salem', 'Thiruvananthapuram', 'Thrissur', 'Kollam', 'Kannur', 'Kozhikode']
  },
  {
    title: '🏔️ East & North-East India',
    locations: ['Gaya', 'Muzaffarpur', 'Bhagalpur', 'Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Siliguri', 'Durgapur', 'Asansol', 'Kharagpur', 'Cuttack', 'Rourkela', 'Berhampur', 'Raipur', 'Bhilai', 'Bilaspur', 'Guwahati', 'Shillong']
  },
  {
    title: '🌐 International Markets',
    locations: ['USA', 'Australia', 'UK', 'Canada', 'Dubai', 'Singapore', 'Malaysia', 'Abu Dhabi', 'Qatar', 'Saudi Arabia']
  }
];

export const ALL_STATE_LOCATIONS: StateLocationData[] = [
  {
    state: 'Uttar Pradesh',
    tier2: ['Noida', 'Greater Noida', 'Lucknow', 'Ghaziabad', 'Agra', 'Kanpur', 'Varanasi', 'Prayagraj', 'Meerut', 'Moradabad'],
    tier3_4: [
      'Aligarh', 'Bareilly', 'Muzaffarnagar', 'Saharanpur', 'Mathura', 'Firozabad', 'Hapur', 'Bulandshahr', 'Ayodhya', 'Gorakhpur',
      'Jhansi', 'Sitapur', 'Unnao', 'Rae Bareli', 'Sultanpur', 'Azamgarh', 'Mirzapur', 'Farrukhabad', 'Etawah', 'Mainpuri',
      'Rampur', 'Bahraich', 'Basti', 'Ballia', 'Deoria', 'Mau', 'Jaunpur', 'Shahjahanpur', 'Bijnor', 'Amroha',
      'Sambhal', 'Pilibhit', 'Barabanki', 'Hardoi', 'Fatehpur', 'Lakhimpur', 'Kasganj', 'Orai', 'Banda', 'Chitrakoot',
      'Etah', 'Lalitpur', 'Kannauj', 'Jalaun', 'Mahoba', 'Hamirpur', 'Chandauli', 'Sonbhadra', 'Shravasti', 'Balrampur',
      'Siddharthnagar', 'Kushinagar'
    ]
  },
  {
    state: 'Haryana',
    tier2: ['Gurgaon', 'Faridabad', 'Panipat', 'Rohtak', 'Hisar'],
    tier3_4: [
      'Karnal', 'Ambala', 'Yamunanagar', 'Kurukshetra', 'Rewari', 'Sonipat', 'Bhiwani', 'Sirsa', 'Fatehabad', 'Kaithal',
      'Narnaul', 'Palwal', 'Jhajjar', 'Charkhi Dadri'
    ]
  },
  {
    state: 'Punjab',
    tier2: ['Chandigarh', 'Mohali', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala'],
    tier3_4: [
      'Bathinda', 'Hoshiarpur', 'Pathankot', 'Moga', 'Abohar', 'Muktsar', 'Fazilka', 'Kapurthala', 'Tarn Taran', 'Barnala',
      'Sangrur', 'Malerkotla'
    ]
  },
  {
    state: 'Rajasthan',
    tier2: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer', 'Bikaner'],
    tier3_4: [
      'Alwar', 'Bharatpur', 'Sikar', 'Bhilwara', 'Pali', 'Sri Ganganagar', 'Chittorgarh', 'Tonk', 'Bundi', 'Nagaur',
      'Dausa', 'Jhunjhunu', 'Barmer', 'Churu', 'Sirohi', 'Banswara', 'Dungarpur', 'Jaisalmer', 'Jalore', 'Karauli',
      'Sawai Madhopur', 'Pratapgarh', 'Rajsamand'
    ]
  },
  {
    state: 'Madhya Pradesh',
    tier2: ['Bhopal', 'Indore', 'Jabalpur', 'Ujjain', 'Gwalior'],
    tier3_4: [
      'Dewas', 'Ratlam', 'Sagar', 'Satna', 'Rewa', 'Chhindwara', 'Morena', 'Shivpuri', 'Mandsaur', 'Neemuch',
      'Sehore', 'Vidisha', 'Datia', 'Tikamgarh', 'Damoh', 'Panna', 'Katni', 'Umaria', 'Anuppur', 'Mandla',
      'Balaghat', 'Betul', 'Khandwa', 'Khargone', 'Barwani', 'Dhar', 'Jhabua', 'Alirajpur'
    ]
  },
  {
    state: 'Maharashtra',
    tier2: ['Mumbai', 'Pune', 'Thane', 'Navi Mumbai', 'Nashik', 'Nagpur', 'Aurangabad', 'Kolhapur', 'Solapur', 'Amravati'],
    tier3_4: [
      'Sangli', 'Latur', 'Akola', 'Jalgaon', 'Nanded', 'Ahmednagar', 'Ratnagiri', 'Chandrapur', 'Gondia', 'Wardha',
      'Beed', 'Osmanabad', 'Washim', 'Buldhana', 'Yavatmal', 'Hingoli', 'Parbhani', 'Dhule', 'Nandurbar', 'Bhandara',
      'Gadchiroli'
    ]
  },
  {
    state: 'Karnataka',
    tier2: ['Bangalore', 'Mysuru', 'Mangaluru', 'Hubballi', 'Belagavi', 'Davanagere', 'Shivamogga'],
    tier3_4: [
      'Tumakuru', 'Ballari', 'Hassan', 'Mandya', 'Chitradurga', 'Kolar', 'Raichur', 'Vijayapura', 'Bagalkot', 'Gadag',
      'Haveri', 'Koppal', 'Yadgir', 'Chikmagalur'
    ]
  },
  {
    state: 'Andhra Pradesh & Telangana',
    tier2: ['Hyderabad', 'Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Warangal', 'Karimnagar', 'Nizamabad'],
    tier3_4: [
      'Nellore', 'Kakinada', 'Rajahmundry', 'Anantapur', 'Kadapa', 'Kurnool', 'Ongole', 'Srikakulam', 'Vizianagaram', 'Eluru',
      'Machilipatnam', 'Chittoor', 'Hindupur', 'Khammam', 'Mahbubnagar', 'Nalgonda', 'Suryapet', 'Siddipet', 'Adilabad',
      'Mancherial', 'Sangareddy', 'Bhupalpally'
    ]
  },
  {
    state: 'Tamil Nadu',
    tier2: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Erode', 'Vellore'],
    tier3_4: [
      'Thanjavur', 'Dindigul', 'Karur', 'Namakkal', 'Krishnagiri', 'Dharmapuri', 'Cuddalore', 'Villupuram', 'Kanchipuram',
      'Tiruvannamalai', 'Nagapattinam', 'Sivaganga', 'Ramanathapuram', 'Virudhunagar', 'Thoothukudi'
    ]
  },
  {
    state: 'Kerala',
    tier2: ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur', 'Kollam', 'Kannur'],
    tier3_4: [
      'Alappuzha', 'Kottayam', 'Kasaragod', 'Pathanamthitta', 'Idukki', 'Malappuram', 'Wayanad'
    ]
  },
  {
    state: 'West Bengal',
    tier2: ['Kolkata', 'Siliguri', 'Durgapur', 'Asansol'],
    tier3_4: [
      'Kharagpur', 'Malda', 'Jalpaiguri', 'Cooch Behar', 'Darjeeling', 'Krishnanagar', 'Berhampore', 'Raiganj', 'Balurghat',
      'Bankura', 'Purulia', 'Suri'
    ]
  },
  {
    state: 'Odisha',
    tier2: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur'],
    tier3_4: [
      'Sambalpur', 'Balasore', 'Baripada', 'Jharsuguda', 'Angul', 'Bargarh', 'Puri', 'Dhenkanal', 'Keonjhar', 'Koraput',
      'Rayagada', 'Balangir', 'Kalahandi', 'Nabarangpur', 'Malkangiri', 'Kandhamal', 'Gajapati'
    ]
  },
  {
    state: 'Bihar & Jharkhand',
    tier2: ['Patna', 'Gaya', 'Muzaffarpur', 'Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro'],
    tier3_4: [
      'Bhagalpur', 'Darbhanga', 'Purnia', 'Begusarai', 'Katihar', 'Ara', 'Motihari', 'Chapra', 'Siwan', 'Sasaram',
      'Jehanabad', 'Araria', 'Kishanganj', 'Supaul', 'Madhepura', 'Saharsa', 'Samastipur', 'Vaishali', 'Buxar', 'Jamui',
      'Nawada', 'Lakhisarai', 'Sheikhpura', 'Deoghar', 'Hazaribagh', 'Giridih', 'Ramgarh', 'Dumka', 'Chaibasa', 'Sahibganj',
      'Pakur', 'Godda', 'Latehar', 'Lohardaga', 'Simdega', 'Gumla', 'Koderma', 'Chatra'
    ]
  },
  {
    state: 'Chhattisgarh',
    tier2: ['Raipur', 'Bhilai', 'Bilaspur'],
    tier3_4: [
      'Korba', 'Durg', 'Rajnandgaon', 'Jagdalpur', 'Ambikapur', 'Mahasamund', 'Dhamtari', 'Kanker', 'Janjgir', 'Raigarh'
    ]
  },
  {
    state: 'Uttarakhand & Himachal Pradesh',
    tier2: ['Dehradun', 'Haridwar', 'Haldwani', 'Shimla', 'Dharamshala', 'Solan'],
    tier3_4: [
      'Roorkee', 'Rudrapur', 'Kashipur', 'Rishikesh', 'Kotdwar', 'Nainital', 'Una', 'Hamirpur', 'Mandi', 'Kullu',
      'Bilaspur', 'Chamba', 'Palampur'
    ]
  }
];
