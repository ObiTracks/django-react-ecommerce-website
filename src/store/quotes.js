import React from "react";
export const getQuotes = () => {
    var quotes = quotes_list.map((category, idx) => {
        return (
            <optgroup label={category.name} key={category.name + idx}>
                {category.quotes.map((quote, idx) => {
                    return (
                        <option key={idx + quote.substring(1, 4)}>
                            {quote}
                        </option>
                    );
                })}
            </optgroup>
        );
    });
    return quotes;
};

export const quotes_list = new Array(
    {
        name: "inspirational",
        quotes: [
            "We cannot solve problems with the kind of thinking we employed when we came up with them",
            "Learn as if you will live forever, live like you will die tomorrow.",
            "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
            "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.",
            "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.",
        ],
    },
    {
        name: "motivational",
        quotes: [
            "People often say that motivation doesn't last. Well, neither does bathing -- that's why we recommend it daily.",
            "Someday is not a day of the week.",
            "Hire character. Train skill.",
            "Your time is limited, so don't waste it living someone else's life.",
            "Sales are contingent upon the attitude of the salesman -- not the attitude of the prospect.",
            "Everyone lives by selling something.",
            "If you are not taking care of your customer, your competitor will.",
            "The golden rule for every businessman is this: Put yourself in your customer's place.",
            "If you cannot do great things, do small things in a great way.",
        ],
    },
    {
        name: "thinking",
        quotes: [
            "A great many people think they are thinking when they are merely rearranging their prejudices.",
            "Clear thinking requires courage rather than intelligence.",
            "Did you ever stop to think, and forget to start again?",
            "Few minds wear out; more rust out.",
            "It is well for people who think, to change their minds occasionally in order to keep them clean.",
            "Language shapes the way we think, and determines what we can think about.",
            "Misery is almost always the result of thinking.",
            "Most of the mistakes in thinking are inadequacies of perception rather than mistakes of logic.",
            "Thought is the blossom; language the bud; action the fruit behind it.",
            "What we think, we become.",
        ],
    },
    {
        name: "philosophical",
        quotes: [
            "The unexamined life is not worth living",
            "Whereof one cannot speak, thereof one must be silent",
            "Entities should not be multiplied unnecessarily",
            "The life of man (in a state of nature) is solitary, poor, nasty, brutish, and short",
            "I think therefore I am” ('Cogito, ergo sum')",
            "He who thinks great thoughts, often makes great errors",
            "We live in the best of all possible worlds",
            "What is rational is actual and what is actual is rational",
            "God is dead! He remains dead! And we have killed him.",
            "There is but one truly serious philosophical problem, and that is suicide",
        ],
    },
    {
        name: "affirmations",
        quotes: [
            "I am successful.",
            "I am confident.",
            "I am powerful.",
            "I am strong.",
            "I am getting better and better every day.",
            "All I need is within me right now.",
            "I wake up motivated.",
            "I am an unstoppable force of nature.",
            "I am a living, breathing example of motivation.",
            "I am living with abundance.",
            "I am having a positive and inspiring impact on the people I come into contact with.",
            "I am inspiring people through my work.",
        ],
    }
);
