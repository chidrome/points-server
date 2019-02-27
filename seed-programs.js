
const db = require('./models');

db.Program.create([
            {
            program: "Accor Le Club",
            current_month: "2.0"
            },
            {
            program: "Aeroplan Loyalty Program",
            current_month: "1.5"
            },
            {
            program: "Alaska Mileage Plan",
            current_month: "1.8"
            },
            {
            program: "American AAdvantage",
            current_month: "1.4"
            },
            {
            program: "American Express Membership Rewards",
            current_month: "2.0"
            },
            {
            program: "Amtrak Guest Rewards",
            current_month: "2.5"
            },
            {
            program: "ANA Mileage Club",
            current_month: "1.4"
            },
            {
            program: "Asia Miles",
            current_month: "1.3"
            },
            {
            program: "Avianca LifeMiles",
            current_month: "1.7"
            },
            {
            program: "Avios",
            current_month: "1.5"
            },
            {
            program: "Bank of America Premium Rewards",
            current_month: "1.0"
            },
            {
            program: "Barclaycard Arrival Miles",
            current_month: "1.0"
            },
            {
            program: "Best Western Rewards",
            current_month: "0.7"
            },
            {
            program: "Capital One Credit Card Rewards",
            current_month: "1.4"
            },
            {
            program: "Chase Ultimate Rewards",
            current_month: "2.0"
            },
            {
            program: "Choice Privileges",
            current_month: "0.6"
            },
            {
            program: "Citi ThankYou Points",
            current_month: "1.7"
            },
            {
            program: "Delta SkyMiles",
            current_month: "1.2"
            },
            {
            program: "Diners Club Rewards",
            current_month: "2.1"
            },
            {
            program: "Discover Rewards",
            current_month: "1.0"
            },
            {
            program: "Emirates Skywards",
            current_month: "1.2"
            },
            {
            program: "Etihad Guest",
            current_month: "1.4"
            },
            {
            program: "Flying Blue",
            current_month: "1.2"
            },
            {
            program: "Frontier Miles",
            current_month: "1.1"
            },
            {
            program: "HawaiianMiles",
            current_month: "1.2"
            },
            {
            program: "Hilton Honors",
            current_month: "0.6"
            },
            {
            program: "IHG Rewards Club",
            current_month: "0.5"
            },
            {
            program: "JetBlue TrueBlue Rewards Program",
            current_month: "1.3"
            },
            {
            program: "Korean Air SkyPass",
            current_month: "1.7"
            },
            {
            program: "Marriott Rewards",
            current_month: "0.9"
            },
            {
            program: "Miles & More",
            current_month: "1.4"
            },
            {
            program: "Qatar Airways Qmiles",
            current_month: "0.8"
            },
            {
            program: "Radisson Rewards",
            current_month: "0.4"
            },
            {
            program: "Singapore Krisflyer",
            current_month: "1.3"
            },
            {
            program: "Southwest Rapid Rewards",
            current_month: "1.5"
            },
            {
            program: "Spirit Airlines Free Spirit",
            current_month: "0.4"
            },
            {
            program: "Turkish Airlines Miles and Smiles",
            current_month: "1.3"
            },
            {
            program: "U.S. Bank FlexPerks",
            current_month: "1.5"
            },
            {
            program: "United MileagePlus",
            current_month: "1.4"
            },
            {
            program: "Virgin Atlantic Flying Club",
            current_month: "1.5"
            },
            {
            program: "Wells Fargo Go Far Rewards",
            current_month: "1.5"
            },
            {
            program: "World of Hyatt Loyalty Program",
            current_month: "1.7"
            },
            {
            program: "Wyndham Rewards",
            current_month: "1.2"
            }
        ]
)
.then(result => {
    console.log('successfully created Logged Programs');
    process.exit();
  })
  .catch(err => {
    console.log('Error Message', err);
  });

