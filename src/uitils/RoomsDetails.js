export const sections = [
    {
        "category": "Basic Facilities",
        "fields": [
            {
                "name": "free_wi_fi",
                "label": "Free Wi-Fi",
                "type": "boolean",
                "mandatory": true,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "air_conditioning",
                "label": "Air Conditioning",
                "type": "boolean",
                "mandatory": true,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "tv",
                "label": "TV",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "24_hour_front_desk",
                "label": "24-Hour Front Desk",
                "type": "boolean",
                "mandatory": true,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },

            {
                "name": "lift_elevator",
                "label": "Lift/Elevator",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "daily_housekeeping",
                "label": "Daily Housekeeping",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "power_backup",
                "label": "Power Backup",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "attached_bathroom",
                "label": "Attached Bathroom",
                "type": "boolean",
                "mandatory": true,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "room_service",
                "label": "Room Service",
                "type": "boolean",
                "mandatory": true,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "parking",
                "label": "Parking",
                "type": "dropdown",
                "mandatory": false,
                "options": [
                    "Free",
                    "Paid",
                    "Not Available"
                ],
                "example": "Free"
            },
        ]
    },
    {
        "category": "General Services",
        "fields": [
            {
                "name": "concierge_service",
                "label": "Concierge Service",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "luggage_storage",
                "label": "Luggage Storage",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "laundry_service",
                "label": "Laundry Service",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "dry_cleaning",
                "label": "Dry Cleaning",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "ironing_service",
                "label": "Ironing Service",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "wake_up_call",
                "label": "Wake-Up Call",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "porter_bellboy",
                "label": "Porter/Bellboy",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "currency_exchange",
                "label": "Currency Exchange",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "multilingual_staff",
                "label": "Multilingual Staff",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            }
        ]
    },
    {
        "category": "Health & Wellness",
        "fields": [
            {
                "name": "gym_fitness_center",
                "label": "Gym / Fitness Center",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "yoga_classes",
                "label": "Yoga Classes",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "sauna",
                "label": "Sauna",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "steam_room",
                "label": "Steam Room",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "jacuzzi",
                "label": "Jacuzzi",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            }
        ]
    },
    {
        "category": "Transfers",
        "fields": [
            {
                "name": "airport_shuttle",
                "label": "Airport Shuttle",
                "type": "dropdown",
                "mandatory": false,
                "options": [
                    "Free",
                    "Paid",
                    "Not Available"
                ],
                "example": "Paid"
            },
            {
                "name": "railway_station_pickup_drop",
                "label": "Railway Station Pickup/Drop",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "taxi_service",
                "label": "Taxi Service",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "shuttle_service_within_city",
                "label": "Shuttle Service within City",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "car_rental",
                "label": "Car Rental",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            }
        ]
    },
    {
        "category": "Food & Drinks",
        "fields": [
            {
                "name": "restaurants",
                "label": "Restaurant(s)",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "bar_lounge",
                "label": "Bar/Lounge",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "caf\u00e9",
                "label": "Caf\u00e9",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "buffet_service",
                "label": "Buffet Service",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "in_room_dining",
                "label": "In-room Dining",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "special_diet_meals_on_request",
                "label": "Special Diet Meals on Request",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            }
        ]
    },
    // {
    //     "category": "Payment Services",
    //     "fields": [
    //         {
    //             "name": "credit_debit_card_accepted",
    //             "label": "Credit/Debit Card Accepted",
    //             "type": "boolean",
    //             "mandatory": true,
    //             "options": [
    //                 "Yes/No"
    //             ],
    //             "example": "Yes"
    //         },
    //         {
    //             "name": "upi_wallets_accepted",
    //             "label": "UPI/Wallets Accepted",
    //             "type": "boolean",
    //             "mandatory": false,
    //             "options": [
    //                 "Yes/No"
    //             ],
    //             "example": "Yes"
    //         },
    //         {
    //             "name": "foreign_currency_accepted",
    //             "label": "Foreign Currency Accepted",
    //             "type": "boolean",
    //             "mandatory": false,
    //             "options": [
    //                 "Yes/No"
    //             ],
    //             "example": "Yes"
    //         },
    //         {
    //             "name": "invoice_billing_support",
    //             "label": "Invoice/Billing Support",
    //             "type": "boolean",
    //             "mandatory": false,
    //             "options": [
    //                 "Yes/No"
    //             ],
    //             "example": "Yes"
    //         }
    //     ]
    // },
    // {
    //     "category": "Safety & Security",
    //     "fields": [
    //         {
    //             "name": "cctv_in_common_areas",
    //             "label": "CCTV in Common Areas",
    //             "type": "boolean",
    //             "mandatory": true,
    //             "options": [
    //                 "Yes/No"
    //             ],
    //             "example": "Yes"
    //         },
    //         {
    //             "name": "smoke_detectors",
    //             "label": "Smoke Detectors",
    //             "type": "boolean",
    //             "mandatory": true,
    //             "options": [
    //                 "Yes/No"
    //             ],
    //             "example": "Yes"
    //         },
    //         {
    //             "name": "fire_extinguishers",
    //             "label": "Fire Extinguishers",
    //             "type": "boolean",
    //             "mandatory": true,
    //             "options": [
    //                 "Yes/No"
    //             ],
    //             "example": "Yes"
    //         },
    //         {
    //             "name": "emergency_exit_near_rooms",
    //             "label": "Emergency Exit Near Rooms",
    //             "type": "boolean",
    //             "mandatory": false,
    //             "options": [
    //                 "Yes/No"
    //             ],
    //             "example": "Yes"
    //         },
    //         {
    //             "name": "security_guard",
    //             "label": "Security Guard",
    //             "type": "boolean",
    //             "mandatory": false,
    //             "options": [
    //                 "Yes/No"
    //             ],
    //             "example": "Yes"
    //         },
    //         {
    //             "name": "electronic_key_access",
    //             "label": "Electronic Key Access",
    //             "type": "boolean",
    //             "mandatory": false,
    //             "options": [
    //                 "Yes/No"
    //             ],
    //             "example": "Yes"
    //         },
    //         {
    //             "name": "in_room_safe",
    //             "label": "In-Room Safe",
    //             "type": "boolean",
    //             "mandatory": false,
    //             "options": [
    //                 "Yes/No"
    //             ],
    //             "example": "Yes"
    //         }
    //     ]
    // },
    {
        "category": "Beauty & Spa",
        "fields": [
            {
                "name": "spa__wellness_center",
                "label": "Spa & Wellness Center",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "beauty_salon",
                "label": "Beauty Salon",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "massage_services",
                "label": "Massage Services",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "hair__nail_services",
                "label": "Hair & Nail Services",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            }
        ]
    },
    {
        "category": "Outdoor Activities & Sports",
        "fields": [
            {
                "name": "swimming_pool",
                "label": "Swimming Pool",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "kids_pool",
                "label": "Kids’ Pool",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "cycling",
                "label": "Cycling",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "trekking_hiking_arrangements",
                "label": "Trekking/Hiking Arrangements",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "tennis_court",
                "label": "Tennis Court",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "indoor_games",
                "label": "Indoor Games",
                "type": "multi-select",
                "mandatory": false,
                "options": [
                    "Chess",
                    "Carrom",
                    "Table Tennis",
                    "Billiards",
                    "Board Games"
                ],
                "example": "Chess, Carrom"
            }
        ]
    },
    {
        "category": "Common Area",
        "fields": [
            {
                "name": "shared_lounge_tv_area",
                "label": "Shared Lounge/TV Area",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "garden",
                "label": "Garden",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "terrace",
                "label": "Terrace",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "library",
                "label": "Library",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "reception_seating",
                "label": "Reception Seating",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            }
        ]
    },
    {
        "category": "Shopping",
        "fields": [
            {
                "name": "on_site_shops",
                "label": "On-site Shops",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "souvenir_gift_shop",
                "label": "Souvenir/Gift Shop",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "convenience_store",
                "label": "Convenience Store",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            }
        ]
    },
    {
        "category": "Business Center & Conferences",
        "fields": [
            {
                "name": "conference_rooms",
                "label": "Conference Room(s)",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "banquet_hall",
                "label": "Banquet Hall",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "business_center",
                "label": "Business Center",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "meeting_rooms",
                "label": "Meeting Rooms",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "audio_visual_equipment",
                "label": "Audio-Visual Equipment",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            }
        ]
    },
    {
        "category": "Other Facilities",
        "fields": [
            {
                "name": "pet_friendly",
                "label": "Pet Friendly",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "wheelchair_accessible",
                "label": "Wheelchair Accessible",
                "type": "boolean",
                "mandatory": true,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "soundproof_rooms",
                "label": "Soundproof Rooms",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "eco_friendly_features",
                "label": "Eco-friendly Features",
                "type": "multi-select",
                "mandatory": false,
                "options": [
                    "Solar",
                    "Water Saving",
                    "Recycling",
                    "LED Lighting",
                    "Eco-friendly Toiletries"
                ],
                "example": "Solar, Water Saving"
            },
            {
                "name": "child_policy",
                "label": "Child Policy",
                "type": "dropdown",
                "mandatory": false,
                "options": [
                    "Children Stay Free",
                    "Age Restriction",
                    "Extra Charges"
                ],
                "example": "Children Stay Free"
            },
            {
                "name": "loyalty_points_eligibility",
                "label": "Loyalty Points Eligibility",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "last_renovated_year",
                "label": "Last Renovated Year",
                "type": "number",
                "mandatory": false,
                "options": [],
                "example": "2022"
            },
            {
                "name": "ev_charging_station_within_premise",
                "label": "EV Charging Station (Within Premise)",
                "type": "dropdown",
                "mandatory": false,
                "options": [
                    "Available",
                    "Not Available"
                ],
                "example": ""
            },
            {
                "name": "medical_centre_within_premise",
                "label": "Medical centre (Within Premise)",
                "type": "dropdown",
                "mandatory": false,
                "options": [
                    "Available",
                    "Not Available"
                ],
                "example": ""
            },
            {
                "name": "newspaper",
                "label": "NewsPaper",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            }
        ]
    },
    {
        "category": "Room Amenities",
        "fields": [

            {
                "name": "work_desk",
                "label": "Work Desk",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "wardrobe_closet",
                "label": "Wardrobe/Closet",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "sofa_seating_area",
                "label": "Sofa/Seating Area",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "balcony_terrace",
                "label": "Balcony/Terrace",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "interconnecting_rooms",
                "label": "Interconnecting Rooms",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "No"
            },
            {
                "name": "mini_bar",
                "label": "Mini-bar",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "kettle_coffee_maker",
                "label": "Kettle / Coffee Maker",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "hair_dryer",
                "label": "Hair Dryer",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "toiletries",
                "label": "Toiletries",
                "type": "boolean",
                "mandatory": true,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },

            {
                "name": "mineral_water",
                "label": "Mineral Water",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "heater",
                "label": "Heater",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "extra_bed_allowed",
                "label": "Extra Bed Allowed",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "air_purifier",
                "label": "Air Purifier",
                "type": "boolean",
                "mandatory": false,
                "options": [
                    "Yes/No"
                ],
                "example": "Yes"
            },
            {
                "name": "housekeeping",
                "label": "Housekeeping",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },

            {
                "name": "wi_fi",
                "label": "Wi-Fi",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "bed_type",
                "label": "Bed Type",
                "type": "dropdown",
                "mandatory": true,
                "options": [
                    "Single",
                    "Twin",
                    "Queen",
                    "King",
                    "Sofa Bed"
                ],
                "example": "King"
            },
            {
                "name": "iron_ironing_board",
                "label": "Iron/Ironing Board",
                "type": "dropdown",
                "mandatory": false,
                "options": [
                    "Available",
                    "On Request",
                    "Not Available"
                ],
                "example": "On Request"
            },
            {
                "name": "smoking_policy",
                "label": "Smoking Policy",
                "type": "dropdown",
                "mandatory": false,
                "options": [
                    "Smoking",
                    "Non-Smoking",
                    "Designated"
                ],
                "example": "Non-Smoking"
            },
            {
                "name": "room_size",
                "label": "Room Size",
                "type": "number",
                "mandatory": false,
                "options": [],
                "example": "250"
            },
            {
                "name": "number_of_beds",
                "label": "Number of Beds",
                "type": "number",
                "mandatory": false,
                "options": [],
                "example": "1"
            },
            {
                "name": "max_occupancy_adults",
                "label": "Max Occupancy (Adults)",
                "type": "number",
                "mandatory": false,
                "options": [],
                "example": "2"
            },
            {
                "name": "max_occupancy_children",
                "label": "Max Occupancy (Children)",
                "type": "number",
                "mandatory": false,
                "options": [],
                "example": "1"
            },

            {
                "name": "extra_bed_price",
                "label": "Extra Bed Price",
                "type": "number",
                "mandatory": false,
                "options": [],
                "example": "800"
            },
            {
                "name": "bed_configuration_flexibility",
                "label": "Bed Configuration Flexibility",
                "type": "dropdown",
                "mandatory": false,
                "options": [
                    "Fixed",
                    "Convertible"
                ],
                "example": "Convertible"
            },
            {
                "name": "bathroom",
                "label": "Bathroom",
                "type": "dropdown",
                "mandatory": true,
                "options": [
                    "Private",
                    "Shared",
                    "Not Available"
                ],
                "example": ""
            },


        ]
    },
    {
        "category": "Media & Entertainment",
        "fields": [
            {
                "name": "tv",
                "label": "TV",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            }
        ]
    },
    {
        "category": "Bathroom",
        "fields": [
            {
                "name": "shaving_mirror",
                "label": "Shaving Mirror",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "dental_kit",
                "label": "Dental Kit",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "bathroom_phone",
                "label": "Bathroom Phone",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "western_toilet_seat",
                "label": "Western Toilet Seat",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "geyser_water_heater",
                "label": "Geyser/Water Heater",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "bath_tub",
                "label": "Bath-Tub",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "hot__cold_water",
                "label": "Hot & Cold Water",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "shower_cap",
                "label": "Shower Cap",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "slippers",
                "label": "Slippers",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "bathrobes",
                "label": "Bathrobes",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "shower_cubicle",
                "label": "Shower Cubicle",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "jetspray",
                "label": "Jetspray",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "towels",
                "label": "Towels",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "sewing_kit",
                "label": "Sewing Kit",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "weighing_scale",
                "label": "Weighing Scale",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            }
        ]
    },
    {
        "category": "Room Features",
        "fields": [
            {
                "name": "charging_points",
                "label": "Charging Points",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "chair",
                "label": "Chair",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "mini_fridge",
                "label": "Mini-Fridge",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "fireplace",
                "label": "Fireplace",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "centre_table",
                "label": "Centre Table",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "fireplace_guards",
                "label": "Fireplace Guards",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "pillow_menu",
                "label": "Pillow Menu",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "hypoallergenic_bedding",
                "label": "Hypoallergenic Bedding",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            }
        ]
    },
    {
        "category": "Safety and Security",
        "fields": [
            {
                "name": "electronic_safe",
                "label": "Electronic Safe",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            },
            {
                "name": "cctv_outside_room",
                "label": "CCTV Outside Room",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            }
        ]
    },
    {
        "category": "Beds and Blanket",
        "fields": [
            {
                "name": "woollen_blanket",
                "label": "Woollen Blanket",
                "type": "boolean",
                "mandatory": false,
                "options": [],
                "example": ""
            }
        ]
    }
];

export const basicSection = {
    category: 'Basic Information',
    fields: [
        {
            name: 'roomName',
            label: 'Room Name',
            type: 'text',
            mandatory: true,
            options: [],
            example: ''
        },
        {
            name: 'roomType',
            label: 'Room Type',
            type: 'dropdown',
            mandatory: true,
            options: ['Standard', 'Deluxe', 'Suite', 'Executive', 'Family'],
            example: ''
        },
        {
            name: 'pricePerNight',
            label: 'Price Per Night',
            type: 'number',
            mandatory: true,
            options: [],
            example: ''
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textarea',
            mandatory: false,
            options: [],
            example: ''
        },

    ]
};

export const allSections = [basicSection, ...sections];