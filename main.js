//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 
const express = require('express')
const OpenAi = require('openai')
const app = express()
let obj = {}
app.use(express.json())
const openai = new OpenAi({
    apiKey: "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"
})
app.get("/getResponse", async(req, res) => {
    const userPrompt=req.body.userPrompt
    console.log(userPrompt);
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ "role": "user", "content": userPrompt }],
        max_tokens: 3500
    })
    console.log(response.choices[0].message.content);
    obj= response.choices[0].message.content
})
app.listen(3000, () => {
    console.log('server is working');
})




// old question
//basid on this inputs make me a schedule for health care routine:
// my age 23 ,I'm female,i dont have any existing medical conditions or
//  chronic illnesses,i am not taking any medication or supplements,my
//   level of physical activity is moderate,i am  omnivore,I am allergic
//    to bananas, i sleep usually 6 hours a day,i dont have a consistent 
//    sleep schedule,my stress levels on a scale of 1 to 10 is 7,i dont
//     practice any stress-reducing activities,such as meditation or 
//     mindfulness,i only drink 4 glasses of water a day ,i spent more 
//     than 8 hours on screens,i don't smoke ? make me a schedule for 
//     tuesday that diffrent from monday's schedule ,i need more detail
//      with specific hours return the answer as a key value pair
//mondauy
// 8:00 AM - Wake up\n' +
// '2. 8:30 AM - Drink a glass of water\n' +
// '3. 8:45 AM - Light stretching or 10-minute morning exercise routine\n' +
// '4. 9:00 AM - Breakfast:\n' +
// '   - Option 1: Oatmeal with fruits and nuts\n' +
// '   - Option 2: Greek yogurt with granola and berries\n' +
// '   - Option 3: Scrambled eggs with whole wheat toast and avocado\n' +
// '5. 10:00 AM - Take a 10-minute break from screens, walk around, or stretch\n' +
// '6. 10:15 AM - Get ready for the day (shower, get dressed, etc.)\n' +
// '7. 11:00 AM - Snack (choose one):\n' +
// '   - Option 1: Apple slices with peanut butter\n' +
// '   - Option 2: Carrot sticks with hummus\n' +
// '   - Option 3: Mixed nuts and seeds\n' +
// '8. 12:30 PM - Lunch (choose one):\n' +
// '   - Option 1: Grilled chicken or tofu salad with mixed greens and veggies\n' +
// '   - Option 2: Whole wheat wrap with lean protein (chicken, turkey, or beans) and veggies\n' +
// '   - Option 3: Quinoa or brown rice bowl with roasted vegetables and a protein source (chickpeas, tofu, or lean meat)\n' +
// '9. 2:30 PM - Take a 15-minute break, go for a short walk outside or do a quick exercise routine\n' +
// '10. 2:45 PM - Snack (choose one):\n' +
// '    - Option 1: Greek yogurt with a small handful of berries or sliced almonds\n' +
// '    - Option 2: Whole grain crackers with cottage cheese or a low-fat cheese\n' +
// '    - Option 3: Vegetable sticks with a healthy dip (guacamole, tzatziki, or salsa)\n' +
// '11. 5:00 PM - Prepare dinner:\n' +
// '    - Option 1: Grilled salmon or chicken with roasted vegetables and quinoa/brown rice/potatoes\n' +
// '    - Option 2: Stir-fried tofu/tempeh with veggies and whole wheat noodles or brown rice\n' +
// '    - Option 3: Lean beef or turkey with steamed veggies and a small portion of whole wheat pasta\n' +
// '12. 6:30 PM - Dinner\n' +
// '13. 7:30 PM - Take a 10-minute break from screens, practice deep breathing or relaxation exercises\n' +
// '14. 8:00 PM - Engage in a hobby or leisure activity to unwind and reduce stress\n' +
// '15. 9:00 PM - Wind down for bed:\n' +
// '    - Option 1: Take a warm bath or shower\n' +
// '    - Option 2: Practice a relaxing bedtime routine (e.g., read a book, listen to calm music)\n' +
// '16. 9:30 PM - Sleep\n' +
// '\n'
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 7:00 AM: Wake up and start the day.\n' +
// '- 7:15 AM: Perform a 15-minute stretching or yoga routine to improve flexibility and awaken your muscles.\n' +
// '- 7:30 AM: Take a shower and get ready for the day.\n' +
// '- 7:45 AM: Eat a balanced breakfast consisting of protein (e.g., eggs, Greek yogurt), whole grains (e.g., oatmeal, whole wheat bread), and fruits/vegetables.\n' +
// '- 8:15 AM: Take any necessary medications or supplements (if prescribed by a healthcare professional) that you might have missed mentioning.\n' +
// '\n' +
// 'Mid-morning:\n' +
// '- 10:00 AM: Have a healthy snack such as a handful of nuts, a piece of fruit, or a protein bar to boost energy levels.\n' +
// '\n' +
// 'Throughout the day:\n' +
// '- Stay hydrated by drinking at least 8 glasses of water (about 8 ounces per glass). This can be spread out over the day (e.g., one glass every 1-2 hours).\n' +
// '- Practice good posture and take regular breaks from sitting if you spend prolonged periods in front of screens.\n' +
// '- If possible, go for short walks at least every hour to counteract sedentary behavior.\n' +
// '\n' +
// 'Lunchtime:\n' +
// '- 12:30 PM: Eat a well-balanced lunch with a mix of lean proteins (e.g., grilled chicken, tofu), whole grains (e.g., brown rice, quinoa), and plenty of vegetables.\n' +
// '- Avoid bananas due to your allergy.\n' +
// '\n' +
// 'Afternoon:\n' +
// '- 2:30 PM: Take a short break to perform deep breathing exercises or light stretching to relieve stress.\n' +
// '- Avoid excessive screen time during breaks; instead, engage in activities such as reading, doing puzzles, or talking to friends.\n' +
// '\n' +
// 'Evening:\n' +
// '- 6:00 PM: Prepare and enjoy a nutritious dinner with balanced portions of proteins, carbohydrates, and vegetables.\n' +
// '- 7:00 PM: Allocate at least 30 minutes for physical activity. Choose your preferred exercise, such as brisk walking, jogging, cycling, or a workout routine.\n' +
// '- 7:30 PM: Wind down by engaging in a stress-reducing activity like reading, taking a bath, or listening to calming music.\n' +
// '\n' +
// 'Nighttime:\n' +
// '- 9:30 PM: Start winding down for bed.\n' +
// "- 10:00 PM: Create a bedtime routine to help signal your body that it's time to sleep. This might include dimming lights, reading a book, or practicing relaxation techniques like progressive muscle relaxation.\n" +
// '- Aim for 7-8 hours of uninterrupted sleep to promote overall health and well-being.\n' +
// '\n' +
// "It's important to note that this schedule is based on the information provided and may need adjustments to personal preferences and requirements. Always consult with a healthcare professional for specific advice regarding your health and lifestyle."
//////////////////////////
// 
