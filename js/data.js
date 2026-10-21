/* Stackly Travel & Tourism - Sample Data */
window.STACKLY_DATA = {
    destinations: [
        {
            id: 'bali',
            name: 'Bali',
            country: 'Indonesia',
            category: 'beach',
            price: 1299,
            rating: 4.8,
            reviews: 420,
            duration: '7-10 Days',
            badge: 'Popular',
            badgeClass: '',
            description: 'Island of the gods with stunning beaches, ancient temples and vibrant culture.',
            image: 'images/library/photo-1537953773345-d172ccf13cf1.webp'
        },
        {
            id: 'maldives',
            name: 'Maldives',
            country: 'Maldives',
            category: 'beach',
            price: 2499,
            rating: 4.9,
            reviews: 280,
            duration: '5-7 Days',
            badge: 'Luxury',
            badgeClass: 'green',
            description: 'Pristine turquoise waters, coral reefs and luxurious overwater villas.',
            image: 'images/library/photo-1514282401047-d79a71a590e8.webp'
        },
        {
            id: 'paris',
            name: 'Paris',
            country: 'France',
            category: 'city',
            price: 1599,
            rating: 4.7,
            reviews: 380,
            duration: '4-6 Days',
            badge: 'Romantic',
            badgeClass: '',
            description: 'The city of lights, world-class art, cuisine and timeless romance.',
            image: 'images/library/photo-1502602898657-3e91760cbb34.webp'
        },
        {
            id: 'swiss-alps',
            name: 'Swiss Alps',
            country: 'Switzerland',
            category: 'mountain',
            price: 1899,
            rating: 4.9,
            reviews: 310,
            duration: '6-8 Days',
            badge: 'Scenic',
            badgeClass: 'blue',
            description: 'Majestic snow-capped peaks, alpine lakes and charming mountain villages.',
            image: 'images/library/photo-1531366936337-7c912a4589a7.webp'
        },
        {
            id: 'kyoto',
            name: 'Kyoto',
            country: 'Japan',
            category: 'cultural',
            price: 1799,
            rating: 4.8,
            reviews: 350,
            duration: '5-7 Days',
            badge: 'Cultural',
            badgeClass: 'navy',
            description: 'Ancient temples, cherry blossoms and traditional tea ceremonies.',
            image: 'images/library/photo-1493976040374-85c8e12f0c0e.webp'
        },
        {
            id: 'dubai',
            name: 'Dubai',
            country: 'UAE',
            category: 'city',
            price: 1399,
            rating: 4.7,
            reviews: 300,
            duration: '4-5 Days',
            badge: 'Modern',
            badgeClass: '',
            description: 'Futuristic skylines, golden deserts and world-class shopping.',
            image: 'images/library/photo-1512453979798-5ea266f8880c.webp'
        }
    ],

    tours: [
        {
            id: 't1', title: 'Bali Adventure Tour', destination: 'Bali', category: 'adventure',
            price: 1299, duration: 7, rating: 4.8, badge: 'Adventure', badgeClass: '',
            description: 'Hiking volcanoes, surfing, temple visits and local culture.',
            image: 'images/library/photo-1537953773345-d172ccf13cf1.webp'
        },
        {
            id: 't2', title: 'Maldives Honeymoon Package', destination: 'Maldives', category: 'honeymoon',
            price: 2499, duration: 5, rating: 4.9, badge: 'Honeymoon', badgeClass: 'green',
            description: 'Romantic overwater villa with spa and candlelight dinner.',
            image: 'images/library/photo-1514282401047-d79a71a590e8.webp'
        },
        {
            id: 't3', title: 'Paris City Escape', destination: 'Paris', category: 'cultural',
            price: 1599, duration: 4, rating: 4.7, badge: 'Cultural', badgeClass: 'navy',
            description: 'Museum tours, Seine river cruise and iconic landmarks.',
            image: 'images/library/photo-1502602898657-3e91760cbb34.webp'
        },
        {
            id: 't4', title: 'Swiss Alps Family Holiday', destination: 'Swiss Alps', category: 'family',
            price: 1899, duration: 6, rating: 4.9, badge: 'Family', badgeClass: 'blue',
            description: 'Scenic train rides, mountain hikes and family-friendly lodges.',
            image: 'images/library/photo-1531366936337-7c912a4589a7.webp'
        },
        {
            id: 't5', title: 'Kyoto Cultural Journey', destination: 'Kyoto', category: 'cultural',
            price: 1799, duration: 5, rating: 4.8, badge: 'Cultural', badgeClass: 'navy',
            description: 'Visit ancient temples, tea houses and cherry blossom gardens.',
            image: 'images/library/photo-1493976040374-85c8e12f0c0e.webp'
        },
        {
            id: 't6', title: 'Dubai Luxury Escape', destination: 'Dubai', category: 'luxury',
            price: 2899, duration: 4, rating: 4.7, badge: 'Luxury', badgeClass: 'green',
            description: '5-star stays, desert safari and private yacht cruise.',
            image: 'images/library/photo-1512453979798-5ea266f8880c.webp'
        },
        {
            id: 't7', title: 'Goa Beach Vacation', destination: 'Goa', category: 'beach',
            price: 899, duration: 5, rating: 4.6, badge: 'Beach', badgeClass: '',
            description: 'Relax on golden sands with water sports and nightlife.',
            image: 'images/library/photo-1512343879784-a960bf40e7f2.webp'
        },
        {
            id: 't8', title: 'Everest Base Camp Trek', destination: 'Nepal', category: 'adventure',
            price: 2199, duration: 12, rating: 4.9, badge: 'Adventure', badgeClass: '',
            description: 'A once-in-a-lifetime trek to the roof of the world.',
            image: 'images/library/photo-1516426122078-c23e76319801.webp'
        },
        {
            id: 't9', title: 'Santorini Luxury Stay', destination: 'Greece', category: 'luxury',
            price: 2699, duration: 6, rating: 4.8, badge: 'Luxury', badgeClass: 'green',
            description: 'Cliffside suites with breathtaking Aegean sunset views.',
            image: 'images/library/photo-1570077188670-e3a8d69ac5ff.webp'
        }
    ],

    hotels: [
        {
            id: 'h1', name: 'Azure Bay Resort', location: 'Bali, Indonesia', category: 'beach',
            price: 220, rating: 4.8, badge: 'Beachfront',
            amenities: ['Free WiFi', 'Pool', 'Spa', 'Breakfast'],
            image: 'images/library/photo-1571003123894-1f0594d2b5d9.webp'
        },
        {
            id: 'h2', name: 'Coral Grand Maldives', location: 'Maldives', category: 'beach',
            price: 540, rating: 4.9, badge: 'Overwater',
            amenities: ['Free WiFi', 'Private Beach', 'Spa', 'Diving'],
            image: 'images/library/photo-1439066615861-d1af74d74000.webp'
        },
        {
            id: 'h3', name: 'Maison Lumière', location: 'Paris, France', category: 'city',
            price: 310, rating: 4.7, badge: 'Boutique',
            amenities: ['Free WiFi', 'Restaurant', 'Bar', 'Concierge'],
            image: 'images/library/photo-1566073771259-6a8506099945.webp'
        },
        {
            id: 'h4', name: 'Alpine Peak Lodge', location: 'Swiss Alps', category: 'mountain',
            price: 295, rating: 4.9, badge: 'Mountain View',
            amenities: ['Free WiFi', 'Fireplace', 'Ski Access', 'Breakfast'],
            image: 'images/library/photo-1582719508461-905c673771fd.webp'
        },
        {
            id: 'h5', name: 'Ryokan Sakura', location: 'Kyoto, Japan', category: 'city',
            price: 260, rating: 4.8, badge: 'Traditional',
            amenities: ['Onsen', 'Tea Ceremony', 'Garden', 'Breakfast'],
            image: 'images/library/photo-1520250497591-112f2f40a3f4.webp'
        },
        {
            id: 'h6', name: 'Skyline Palace Dubai', location: 'Dubai, UAE', category: 'city',
            price: 410, rating: 4.7, badge: '5-Star',
            amenities: ['Free WiFi', 'Infinity Pool', 'Spa', 'Rooftop Bar'],
            image: 'images/library/photo-1568084680786-a84f91d1153c.webp'
        },
        {
            id: 'h7', name: 'Coral Cove Goa', location: 'Goa, India', category: 'beach',
            price: 150, rating: 4.6, badge: 'Beachfront',
            amenities: ['Free WiFi', 'Pool', 'Beach Bar', 'Breakfast'],
            image: 'images/library/photo-1520250497591-112f2f40a3f4.webp'
        },
        {
            id: 'h8', name: 'Aegean Cliff Suites', location: 'Santorini, Greece', category: 'beach',
            price: 480, rating: 4.8, badge: 'Luxury',
            amenities: ['Free WiFi', 'Plunge Pool', 'Sea View', 'Breakfast'],
            image: 'images/library/photo-1571896349842-33c89424de2d.webp'
        },
        {
            id: 'h9', name: 'Northern Lights Lodge', location: 'Tromsø, Norway', category: 'mountain',
            price: 350, rating: 4.9, badge: 'Aurora View',
            amenities: ['Free WiFi', 'Sauna', 'Glass Roof', 'Breakfast'],
            image: 'images/library/photo-1464822759023-fed622ff2c3b.webp'
        }
    ],

    testimonials: [
        { name: 'Sarah Mitchell', location: 'Bali, Indonesia', rating: 5, text: 'Stackly made our Bali honeymoon absolutely magical. Every detail was perfectly planned, from the villa to the private tours. Highly recommended!' },
        { name: 'James Carter', location: 'Swiss Alps', rating: 5, text: 'The family trip to the Swiss Alps exceeded all expectations. The kids loved the train rides and the lodges were stunning. Flawless organization.' },
        { name: 'Priya Sharma', location: 'Maldives', rating: 5, text: 'An unforgettable experience. The overwater villa was breathtaking and the staff catered to our every need. Booking with Stackly was a breeze.' },
        { name: 'Daniel Okafor', location: 'Kyoto, Japan', rating: 5, text: 'Immersing in Kyoto culture was incredible. Our guide was knowledgeable and friendly. The itinerary balanced sightseeing with relaxation perfectly.' },
        { name: 'Emma Rossi', location: 'Paris, France', rating: 4, text: 'Paris was everything we dreamed of. Great hotel location, wonderful food tours, and seamless transfers. Will definitely book again.' },
        { name: 'Liam Walker', location: 'Dubai, UAE', rating: 5, text: 'The Dubai luxury escape was spectacular. Desert safari and yacht cruise were highlights. Transparent pricing with no surprises.' },
        { name: 'Aisha Rahman', location: 'Santorini, Greece', rating: 5, text: 'Sunset views from our cliffside suite were unreal. Stackly handled every transfer and reservation so we could simply relax and enjoy.' },
        { name: 'Marco Bianchi', location: 'Rome, Italy', rating: 5, text: 'Our private guide brought the history of Rome to life. The food tour was a highlight, and the hotel was steps from the Colosseum.' },
        { name: 'Chloe Dubois', location: 'Bora Bora, French Polynesia', rating: 4, text: 'Crystal-clear lagoons and a beautiful overwater bungalow. Everything was smooth, though we wished we had booked a longer stay!' },
        { name: 'Noah Williams', location: 'Cape Town, South Africa', rating: 5, text: 'From Table Mountain hikes to a safari day trip, the itinerary was perfectly balanced. The local guides were warm and incredibly knowledgeable.' },
        { name: 'Yuki Tanaka', location: 'Tokyo, Japan', rating: 5, text: 'A seamless mix of modern Tokyo and quiet temples. Stackly booked fantastic restaurants that we never would have found on our own.' },
        { name: 'Olivia Brown', location: 'Tromsø, Norway', rating: 5, text: 'Seeing the Northern Lights from our glass-roof lodge was a dream come true. The team thought of every detail, even the warm gear.' }
    ],

    gallery: [
        { category: 'beach', caption: 'Golden sands of Bali', image: 'images/library/photo-1512343879784-a960bf40e7f2.webp', span: 'wide' },
        { category: 'mountain', caption: 'Swiss Alps at sunrise', image: 'images/library/photo-1531366936337-7c912a4589a7.webp', span: 'tall' },
        { category: 'beach', caption: 'Maldives overwater villas', image: 'images/library/photo-1514282401047-d79a71a590e8.webp', span: '' },
        { category: 'city', caption: 'Paris at dusk', image: 'images/library/photo-1502602898657-3e91760cbb34.webp', span: '' },
        { category: 'cultural', caption: 'Kyoto temple gardens', image: 'images/library/photo-1493976040374-85c8e12f0c0e.webp', span: 'wide' },
        { category: 'city', caption: 'Dubai skyline', image: 'images/library/photo-1512453979798-5ea266f8880c.webp', span: '' },
        { category: 'mountain', caption: 'Alpine lake reflections', image: 'images/library/photo-1464822759023-fed622ff2c3b.webp', span: '' },
        { category: 'cultural', caption: 'Ancient temple archways', image: 'images/library/photo-1528181304800-259b08848526.webp', span: 'tall' }
    ],

    blog: [
        {
            id: 'b1', title: '10 Essential Tips for First-Time Travelers to Bali',
            category: 'Travel Tips', author: 'Sarah Mitchell', date: 'March 12, 2026',
            excerpt: 'From the best time to visit to hidden beaches only locals know, here is everything you need for your Bali adventure.',
            image: 'images/library/photo-1537953773345-d172ccf13cf1.webp'
        },
        {
            id: 'b2', title: 'The Ultimate Maldives Honeymoon Guide',
            category: 'Honeymoon', author: 'James Carter', date: 'March 5, 2026',
            excerpt: 'Planning a romantic escape? Discover the best resorts, experiences and tips for an unforgettable Maldives honeymoon.',
            image: 'images/library/photo-1514282401047-d79a71a590e8.webp'
        },
        {
            id: 'b3', title: 'A Weekend in Paris: The Perfect Itinerary',
            category: 'City Breaks', author: 'Emma Rossi', date: 'February 28, 2026',
            excerpt: 'Only have a weekend? Follow this curated itinerary to experience the very best of Paris in 48 hours.',
            image: 'images/library/photo-1502602898657-3e91760cbb34.webp'
        },
        {
            id: 'b4', title: 'Hiking the Swiss Alps: A Complete Guide',
            category: 'Adventure', author: 'Daniel Okafor', date: 'February 20, 2026',
            excerpt: 'Everything you need to know about planning a hiking trip through the breathtaking Swiss Alps.',
            image: 'images/library/photo-1531366936337-7c912a4589a7.webp'
        },
        {
            id: 'b5', title: 'Kyoto Cherry Blossom Season: When & Where',
            category: 'Cultural', author: 'Priya Sharma', date: 'February 14, 2026',
            excerpt: 'Time your visit perfectly to witness Japan’s iconic cherry blossoms in the ancient capital.',
            image: 'images/library/photo-1493976040374-85c8e12f0c0e.webp'
        },
        {
            id: 'b6', title: 'Luxury Travel on a Budget: Insider Secrets',
            category: 'Travel Tips', author: 'Liam Walker', date: 'February 2, 2026',
            excerpt: 'Learn how to enjoy five-star experiences without the five-star price tag.',
            image: 'images/library/photo-1512453979798-5ea266f8880c.webp'
        }
    ]
};