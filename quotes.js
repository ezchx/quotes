var quotes = [
["The meaning of life is growth.","Anonymous"],
["We will either find a way or make one.","Hannibal"],
["Men overloaded with work have supposed idleness to be happiness, not reflecting that the worst of conditions is that of a man who has nothing to do.","Voltaire"],
["Time, opportunity, the ambition of some, and the weakness of others have done and will do everything in this world.","Voltaire"],
["His enemy was time. Or perhaps it was his friend. One never knows for sure.","Thomas Wolfe"],
["Indeed, the truth that many people never understand, until it is too late, is that the more you try to avoid suffering, the more you suffer, because smaller and more insignificant things begin to torture you in proportion to your fear of being hurt.","Thomas Merton"],
["The man who attempts to purchase the brains of his superiors to serve him, with his money replacing his judgment, ends up becoming the victim of his inferiors.","Ayn Rand, Atlas Shrugged"],
["No man may be smaller than his money.","Ayn Rand, Atlas Shrugged"],
["Do not let the hero in your soul perish.","Ayn Rand, Atlas Shrugged"],
["We cannot solve our problems with the same thinking we used when we created them.","Albert Einstein"],
["When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That's relativity.","Albert Einstein"],
["A person who never made a mistake never tried anything new.","Albert Einstein"],
["Anger dwells only in the bosom of fools.","Albert Einstein"],
["Intellectuals solve problems, geniuses prevent them.","Albert Einstein"],
["We cannot lose what really belongs to us. Therefore we need have no anxiety.","I Ching"],
["When a strong man meets with adversity, he remains cheerful despite all danger, and this cheerfulness is the source of later successes.","I Ching"],
["The angry man will defeat himself in battle as well as in life.","Joe Hyams, Zen in the Martial Arts"],
["Knowing others is wisdom. Knowing yourself is enlightenment.","Joe Hyams, Zen in the Martial Arts"],
["Fear is shadow, not substance.","Joe Hyams, Zen in the Martial Arts"],
["One repays a teacher badly if one remains only a pupil.","Nietzsche, Ecce Homo"],
["The truth knocks on the door and you say go away, I am looking for the truth, and so it goes away.","Zen and the Art of Motorcycle Maintenance"],
["Hundreds of itsy bitsy rules for itsy bitsy people.","Zen and the Art of Motorcycle Maintenance"],
["When a shepherd goes to kill a wolf, and takes his dog to see the sport, he should take care to avoid mistakes. The dog has certain relationships to the wolf that the shepherd may have forgotten.","Zen and the Art of Motorcycle Maintenance"],
["A violent man shall die a violent death.","Kung Fu Meditations and Chinese Proverbial Wisdom"],
["The sage avoids extremes, indulgence, and complacency.","Kung Fu Meditations and Chinese Proverbial Wisdom"],
["He who knows he has enough is rich.","Kung Fu Meditations and Chinese Proverbial Wisdom"],
["The wise man does not quarrel, so no one quarrels with him.","Kung Fu Meditations and Chinese Proverbial Wisdom"],
["Creating, not possessing. Working, not taking credit.","Kung Fu Meditations and Chinese Proverbial Wisdom"],
["Misplaced desire is the greatest enemy of happiness.","Kung Fu Meditations and Chinese Proverbial Wisdom"],
["Do not complain about the truth.","Kung Fu Meditations and Chinese Proverbial Wisdom"],
["A stupid man dies a stupid death.","Kung Fu Meditations and Chinese Proverbial Wisdom"],
["Human beings, knowing that they are not perfect, desire perfection and search for a better life. While a better life is possible, a perfect life is not.","Tai Chi Classics"],
["There is no fate that cannot be surmounted by scorn.","Albert Camus, the Myth of Sisyphus"],
["If the world were clear, art would not exist.","Albert Camus, the Myth of Sisyphus"],
["There is no sun without shadow and it is essential to know the night.","Albert Camus, the Myth of Sisyphus"],
["No excuses ever, for anyone, that's my principle at the outset.","Albert Camus, the Myth of Sisyphus"],
["Each of us is the source of our own joys and sorrows, through such choices, our own wealth and poverty and all that we experience.","Fred Alan Wolf, Taking the Quantum Leap"],
["Not even wrong.","Peter Woit, on string theory"],
["Only you can make you angry.","Essential Zen"],
["The more I speak, the less I say.","the Wheel of Life and Death"],
["What did your face look like before you were born?","Zen Koan"],
["It is no more surprising to be born twice than to be born once.","Voltaire"],
["Silence is your true origin.","Questions to a Zen Master"],
["Without the ego, there is no suffering.","Questions to a Zen Master"],
["When the mind is free, everything around it is free.","Questions to a Zen Master"],
["It is shameful to make salary your sole object irrespective of whether the Way prevails in the state or not.","Confucius"],
["It is not the failure of others to appreciate your abilities that should trouble you, but rather your own lack of them.","Confucius"],
["It has been objected that upon the abolition of private property all work will cease and universal laziness will overtake us.","Carl Marx, the Communist Manifesto"],
["The things that are the most universal are pretty well the most difficult thing for men to get to know, since they are the furthest removed from their senses.","Aristotle"],
["True, absolute knowledge cannot be shaken.","Aristotle"],
["One does not bargain with life.","Living Zen"],
["The mind which has been freed from attachment and the static tendencies of habit, contains extraordinary flexibility and agility.","Living Zen"],
["The ignorant, indecisive, and lacking in faith, waste their lives. They can never be happy in this world or any other.","the Bhagavad Gita"],
["A life of work, even successful work cannot be fulfilling without self-knowledge.","the Bhagavad Gita"],
["I am time, the destroyer of all, I have come to consume the world. Even without your participation, all of the warriors here will die.","the Bhagavad Gita"],
["We have control over our actions, but we have no control over the results.","the Bhagavad Gita"],
["If you can find a way without any obstacles, it probably leads nowhere.","Che Guevara"],
["I would rather die standing than live on my knees.","Che Guevara"]
];

$(document).ready(function() {
  $("#btnSubmit").click(function() {
    var randy = Math.floor(Math.random() * quotes.length);
    $("#quote").html(quotes[randy][0]);
    $("#author").html(quotes[randy][1]);
  });
});

$(document).ready(function() {
    $('#btnSubmit').click();
});


