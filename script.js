const heart = document.querySelector('.heart');
const poemElement = document.querySelector('.poem');
const p = document.createElement('p');
const poems = [
    [
        `As nectar fills the flower,
        <br />
        giving sustenance to the bee,
        <br />
        I need you every hour,
        <br />
        to give your love to me.
       `
    ],
    [
        `If I write a love letter and
            send it to you,
            <br />
            Will you write back in a day or two?
            <br />
            Will you scribble kind words in soft curling ink?
            <br />
            Will you seal it with lips that are curving and pink?
        `
    ],
    [
        `When I can’t say it with
            words, 
            <br />
            look into my eyes
            <br />
            and you’ll find infinite true love I can’t vocalize.
        `
    ],
    [
        `My love is a promise, 
        <br />
        an unbreakable bond.
            <br />
            Forever I’ll love you, here and beyond.
        `
    ],
    [
        `Like bees love honey, 
        <br />
        and flowers love sun,
        <br />
        I love you, my darling, 
        <br />
        you’re the only one.
        `
    ],
    [
        `A chance encounter, 
        <br />
        really
        just a glance;
        <br />
        And now my heart, my very soul, doesn’t stand a chance.
        `
    ],
    [
        `When I’m down, you lift me up.
            <br />
            When I’m hurting, you make me well.
            <br />
            Your love is over the top, and
            <br />
            I’m forever under your spell.
        `
    ],
    [
        `If time could ease its
            relentless march when we’re together,
            <br />
            and hasten its plodding pace when we’re apart,
            <br />
            I could spend an eternity in your arms,
            <br />
            to savor love everlasting in my heart.
        `
    ],
    [
        `My joy is complete when I’m
            with you.
            <br />
            Our time is sweet and our love is True.
        `
    ],
    [
        `To feel your hands warm on my
            face,
            <br />
            To hold you close in a loving embrace,
            <br />
            To kiss your lips with passion and peace,
            <br />
            I’d give everything and ask time to cease.
        `
    ],
    [
        `My compass points to you,
            <br />
            and all pathways lead home.
            <br />
            I always find you waiting,
            <br />
            no matter where I roam.
        `
    ],
    [
        `Your smile never fails to move
            me.
            <br />
            Your touch leaves me breathless.
            <br />
            You speak, and I’m removed from this world,
            <br />
            to a place where love is deathless.
        `
    ],
    [
        `I didn’t start out to end this
            way,
            <br />
            so in love that I can’t see straight.
            <br />
            Now how can life be anything but this?
            <br />
            Encountering you was always my fate.
        `
    ],
    [
        `To win you over, I gave my
            all.
            <br />
            You are worth everything.
            <br />
            Our trophy is love, to treasure forever,
            <br />
            and its symbol is this ring.
        `
    ],
    [
        `My love for you is an intense
            longing.
            <br />
            No one has loved like this before.
            <br />
            And I will love you deeply, truly,
            <br />
            now and forevermore.
        `
    ],
    [
        `Your love waters my soul,
            feeds my being, keeps me alive.
            <br />
            Your devotion is my very essence, allowing me to thrive.
        `
    ],
    [
        `Your hands have held me,
            stroked my hair,
            <br />
            touched me gently, showed you care.
            <br />
            Your lips have kissed me, brushed my cheek,
            <br />
            tasted my tears, made me weak.
        `
    ],
    [
        `I live for you only.
            <br />
            Your lips alone fit into mine.
            <br />
            I need your love exclusively.
            <br />
            Your matchless love is divine.
        `
    ],
    [
        `Our love is a familiar
            rendition, notes played softly, a revival of peace.
            <br />
            Sometimes it’s a crashing symphony, passionately played, a joyful
            masterpiece.
        `
    ],
    [
        `Our future is a gift to be
            opened,
            <br />
            filled with unimaginable treasures.
            <br />
            It’s a book to be read,
            <br />
            brimming with all of life’s pleasures.
        `
    ],
    [
        `If I were a bird,
            <br />
            a robin or a jay,
            <br />
            I’d fly to your house,
            <br />
            and serenade you all day.
        `
    ],
    [
        `Tonight, look up and see the
            moon.
            <br />
            I’m looking too, and I’ll be with you soon.
        `
    ],
    [
        `When the stars are bright and
            the moon is glowing,
            <br />
            Our river of love will soon be flowing.
        `
    ],
    [
        `Like a river to the sea,
            <br />
            bring your sweet love home to me.
        `
    ],
    [
        `Your love is magic, a
            bewitchment, a spell.
            <br />
            But how much you love me, I never can tell.
        `
    ],
    [
        `You’re a beckoning force, a
            magnetic soul.
            <br />I can’t turn away because you make me whole.
       `
    ],
    [
        `You whisper soft love with
            lips that beckon.
            <br />
            And I can’t live without you for even one second.
       `
    ],
    [
        `How many days have we been in
            love?
            <br />
            How many secrets have we spoken of?
            <br />
            How many wishes have yet to come true?
            <br />
            How many wonders will I see with you?
       `
    ],
    [
        `I knew you were there, but I
            didn’t know your name.
            <br />
            I called for you, but you never came.
            <br />
            I knew it was you, but I didn’t know your face.
            <br />
            Then my soul recognized you; our souls have embraced.
       `
    ],
    [
        `A million stars up in the sky.<br />
        One shines brighter - I can't deny.<br />
        A love so precious, a love so true,<br />
        a love that comes from me to you.<br />
        The angels sing when you are near.<br />
        Within your arms I have nothing to fear.<br />
        You always know just what to say. <br />
        Just talking to you makes my day.<br />
        I love you, honey, with all of my heart.<br />
        Together forever and never to part.`
    ],
    [
        `My love for you is like the raging sea,<br />
        So powerful and deep it will forever be.<br />
        Through storm, wind, and heavy rain,<br />
        It will withstand every pain.<br />
        Our hearts are so pure and love so sweet.<br />
        I love you more with every heartbeat!`
    ],
    [
        `I wake up every day with your smile on my mind. <br />
        It's a beautiful sight to behold, so soft and so kind.
        <br />
        My dreams are filled with the thought of me and you. <br />
        I awake and smile, for my dreams have come true. <br />
        I have you to guide me through my troubles and fears. <br />
        I'll always be here for you through your struggles and
        tears. <br />
        I love you more than my words could ever show.<br />
        You mean everything to me; I just want you to know.<br />
        I'll be here for you no matter the dilemma. <br />
        You will always be first on my agenda.`
    ],
    [
        `I'll be the one to call you baby at night<br />
        I'll be the one to stand by your side and fight<br />
        I'll be the one you will grow to love<br />
        I will be the one you can't stop thinking of<br />
        Just tell me when<br />
        Just tell me where<br />
        I swear, baby, I will be there`
    ],
    [
        `Love is like a river,<br />
        A never ending stream.<br />
        Love is shared by each other<br />
        To answer someone's dream.<br />
        <br />
        It's a never ending story;<br />
        Love is not a lie.<br />
        You can share in all its glory,<br />
        For love will never die.<br />
        <br />
        Love is all around you,<br />
        The moon and stars above.<br />
        Love is a gift from God,<br />
        And God is a gift of love.`
    ],
    [
        `love me<br />
    through it all<br />
    <br />
    the beautiful days<br />
    the dark days<br />
    the days when I am drowning<br />
    the days when I am lost<br />
    the days when I am stagnant<br />
    <br />
    for it is love,<br />
    and only love,<br />
    that heals all wounds<br />`
    ],
    [
        `What do I do,<br />
    When I'm still in love with you?<br />
    You walked away,<br />
    'Cause you didn't want to stay.<br />
    You broke my heart, you tore me apart.<br />
    Every day I wait for you,<br />
    Telling myself our love was true.<br />
    But when you don't show, more tears start to flow.<br />
    That's when I know<br />
    I have to let go.`
    ],
    [
        `I always think of you.<br />
    In my sleep,<br />
    in my dreams,<br />
    I always think of you.<br />
    All night all day, hoping you're all right,<br />
    I always think of you,<br />
    Wishing that you were thinking of me too.<br />
    Every minute, every second of the day, I think of you.<br />
    I really do.<br />
    All because...I love you.`
    ],
    [
        `You look at me as if I'm the only guy around.<br />
    You make me feel important and never let me down.<br />
    <br />
    You've shown me how to live,<br />
    How to smile, what to say.<br />
    You've shown me what it's worth<br />
    To love someone each and every day.<br />
    <br />
    So this poem goes out to you <br />
    For everything you've done,<br />
    And I hope now you understand<br />
    That baby, you're the one!<br />
    <br />
    I love you!`
    ],
    [
        `L is for "laughter" we had along the way.<br />
    O is for "optimism" you gave me every day.<br />
    V is for "value" of being my best friend.<br />
    E is for "eternity," a love that has no end.`
    ],
    [
        `When you smile at me, I lose myself.<br />
    You give me this feeling that makes me overwhelmed.<br />
    When your hand is in mine, I feel totally fine,<br />
    And that's the reason I had to make you mine.<br />
    Forever and ever till the end,<br />
    I will be by your side through thick and thin.<br />
    I love you more than you'll ever know.<br />
    I just wanted to say I'm never letting go.<br />`
    ],
    [
        `Take my heart; I'll give it with ease.<br />
    Take my hand and walk this journey with me.<br />
    Take these scars and heal them all up.<br />
    Take these fears and make them vanish when things get
    tough.<br />
    Take this smile and make it stretch so wide.<br />
    Take these arms and hold me oh so tight.<br />
    Take these feelings and make them real.<br />
    At the end, show me how to feel.`
    ],
    [
        ` Laid my head upon your chest<br />
    Your arms encircled me,<br />
    It was, My Love, as if we were<br />
    What God meant us to be,<br />
    <br />
    I closed my eyes and heard your heart<br />
    Your soft smile in my hair,<br />
    I'd never felt so whole and safe<br />
    Our hearts beating as a pair,<br />
    <br />
    You found my eyes and told me of<br />
    A love for me undying,<br />
    I kissed your face and knew right then<br />
    It was in Heaven we were lying.`
    ],
    [
        `I melt when you <br />
    smile.<br />
    I can't breathe when you<br />
    speak.<br />
    Everything else fades away when you <br />
    touch me.<br />
    I think I might fly when you <br />
    kiss me.<br />
    All I know when you're around is <br />
    I love you.`
    ],
    [
        `When I miss you,<br />
    I seek solace in my heart and soul<br />
    For in its depths, your essence I know.<br />
    <br />
    When you miss me,<br />
    Just close your eyes and feel me near,<br />
    For in your heart, I'll always be here.<br />
    <br />
    Together, we're bound by a love so bright,<br />
    Our souls entwined, forever in sight.`
    ],
    [
        `You hold my hand,<br />
    I, like a child, feel safe.<br />
    You hold my hand,<br />
    I feel a warm embrace.<br />
    You hold my hand,<br />
    my fears begin to fade.<br />
    You hold my hand,<br />
    and I am less afraid.<br />
    You hold my hand,<br />
    I know a sense of peace.<br />
    You hold my hand,<br />
    I feel my troubles cease.`
    ],
    [
        `You are what I’ve been searching for,<br />
    chasing after,<br />
    longing to find,<br />
    every star, moonbeam, and dream,<br />
    all of every thing so infinitely far away<br />
    and yet so intimately here in my arms.<br />`
    ],
    [
        `A gun can kill, <br />
    fire can burn,<br />
    Wind can chill, <br />
    and the mind can learn,<br />
    Anger can rage <br />
    'til it tears you apart,<br />
    But the power of your smile <br />
    can mend a broken heart.`
    ],
    [
        `When I say I love you, please believe it's true.<br />
    When I say forever, know I'll never leave you. <br />
    When I say goodbye, promise me you won't cry,<br />
    Because the day I'll be saying that will be the day I die.`
    ],
    [
        `You say you love me<br>
    you say you care<br>
    But when you look into my eyes<br>
    I see and feel something more<br>
    I see your soul and you see mine<br>
    I feel your love, love words can't describe<br>
    You are the one, the one I'll always love<br>
    and the one that will always care...my first love<br>`
    ],
    [
        `If I could be anything in world,<br>
    I would be your tears;<br>
    Conceived in your heart,<br>
    Born in your eyes,<br>
    Live on your cheek,<br>
    And die on your lips.`
    ],
    [
        `The thing is: Love will break you.<br>
    That is a guarantee.<br>
    Yet at the same time, <br>
    it is the only thing that can put you back together.<br>`
    ],
    [
        `It feels good to be in your arms,<br>
        to feel the warmth of your touch.<br>
        I love to look into your beautiful eyes,<br>
        to see how much you care.<br>
        It feels good to have someone like you<br>
        to think about every day.<br>
        I love to take long walks with you,<br>
        to hold your hand every step of the way.`
    ],
    [
        `I want to kiss your red lips<br>
    I want to touch your rosy cheeks<br>
    I want to hear your lovely voice<br>
    Although it can make a loud noise<br>
    <br>
    I will forget all my sorrow<br>
    Just to be with you tomorrow<br>
    Thinking you're always beside me<br>
    Hoping that you'll never leave me`
    ],
    [
        `My Heart is something that gives me life<br>
    My Heart feeds and nurtures as if it were my wife<br>
    My Heart is kind and loving down to the last drop<br>
    My Heart keeps me going not wanting to stop<br>
    My Heart has a pulse to it unlike anything in this universe<br>
    My Heart gives me strength in the hardest traverse <br>
    My Heart gives me structure in such an unstructured place<br>
    My Heart beats at an insurmountable pace<br>
    My Heart bonds me together so that nothing could tear it apart<br>
    My Heart is something I loved right from the start<br>
    Yes, you! You are my heart`
    ],
    [
        `be with someone<br>
    who fights for<br>
    you, someone who<br>
    knows you are<br>
    worth it, someone<br>
    who knows love is<br>
    worth it.<br>`
    ],
    [
        `I believe<br>
    in some way<br>
    no matter how much<br>
    we have changed<br>
    or how much time has passed<br>
    I believe<br>
    our souls<br>
    will always feel at home<br>
    next to one another<br>`
    ],
    [
        `I don’t think she is perfect.<br>
    She is flawed and broken like the rest of us.<br>
    But the pieces she has left of her heart,<br>
    match the pieces missing from mine.<br>
    She is not perfect,<br>
    but she does make me whole. <br>`
    ],
    [
        `As I get to know you more and more <br>
    My feelings for you start getting harder to ignore<br>
    I love talking to you every day <br>
    Even when there's not much to say<br>
    Your beautiful smile always stays in my mind<br>
    Such a lady, so cute and so kind<br>
    I know we're meant to be<br>
    I really hope you would agree`
    ],
    [
        `Beauty isn't seen by eyes.<br>
    It's felt by hearts,<br>
    Recognized by souls,<br>
    In the presence of love.`
    ],
    [
        `Vulnerable before I found you<br>
    Lost in the lonely streets of my heart<br>
    I loved you since I first saw you<br>
    and happiness reborn from my pointless past.<br>
    Angels were laughing,<br>
    an endless dream of red roses.<br>
    You looked at me with your fragile sight<br>
    I looked at you with my soul<br>
    and then our story began<br>
    and is still going on.<br>
    A spontaneous dark moment<br>
    and then a spark which led me to you	`
    ],
    [
        `A wish for lots of birthday fun<br>
    To last until the day is done.<br>
    Hoping that all your wishes comes true,<br>
    and your birthday cake is as sweet as you!`
    ],
    [
        `Live, love, laugh,<br>
    play, fight, cry.<br>
    Time seems short when it's just you and I,<br>
    so I'll live every moment as if it were my last,<br>
    and no longer will I focus on the moments of my past.<br>
    You are what's important now, what's always in my heart.<br>
    My only wish for the two of us is that we'll never have to part.`
    ],
    [
        `If you said you were cold,<br>
    I would wrap my arms around you. <br>
    If you said you were thirsty, <br>
    I would give you the ocean blue.<br>
    I would give you anything: the moon, the stars, the sunset too. <br>
    This heart in my hands I hold out to you.`
    ],
    [
        `Sometimes in our life you'll fall apart,<br>
    But I promise I'll catch you in my arms. <br>
    I will never give into life's temptations.<br>
    I promise to stay strong in a weak generation. <br>
    I will not walk in front of you or behind, <br>
    But forever in this life I'll walk by your side. <br>
    If you get scared on the darkest nights, <br>
    I'll hold your hand 'til the morning light.<br>
    They say life ain't easy, but as long as I'm around, <br>
    I promise to help you up every time you hit the ground. <br>
    This world is crazy, but so are we,<br>
    And I need you, just like you need me.`
    ],
    [
        `I was never looking<br>
    for another half<br>
    to make me whole,<br>
    just someone<br>
    who was willing<br>
    to walk with me<br>
    no matter how far<br>
    I strayed.<br>`
    ],
    [
        `L is for the Laughter I give to you every day <br>
    &nbsp; &nbsp;knowing you'll never go away<br>
    <br>
    O is for the Options we'll have when we're together <br>
    &nbsp; &nbsp;knowing our love couldn't get any better<br>
    <br>
    V is for the Visions I have of you <br>
    &nbsp; &nbsp;knowing I'll never find anyone quite like you<br>
    <br>
    E is for Everything that's true I've ever said <br>
    &nbsp; &nbsp;especially when I said, "We'll be together till we're dead."`
    ],
    [
        `Your heart is kind,<br>
    And my heart is truly in your hands.<br>
    From the first words we say together,<br>
    I will love you forever.`
    ],
    [
        `If roses were red and violets could be blue, <br>
    I'd take us away to a place just for two.<br>
    You'd see my true colors and all that I felt.<br>
    I'd see that you could love me and nobody else.<br>
    We'd build ourselves a fortress where we'd run and play.<br>
    You'd be mine and I'd be yours 'til our dying day.<br>
    Then I wake and realize you were never here.<br>
    It's all just my thoughts, my dreams, my hopes...<br>
    But now it's only tears!<br>`
    ],
    [
        `True love is measured by how deep you fall<br>
    And judged by how low you are willing to crawl<br>
    Just to save it and make it last<br>
    It is determined by how willing you are to open up and offer your trust. <br>
    It is hospitable, amazing at all times, and always kind.<br>
    It is never prejudiced, it is color blind...`
    ],
    [
        `You bring the sunshine to my rain.<br>
    You give me love when I feel pain.<br>
    <br>
    Lazy mornings and starry skies, <br>
    my time with you always flies.<br>
    <br>
    I'm happiest with you, and on that I'd bet, <br>
    the way I feel with you I will never forget.`
    ],
    [
        `I love you so deeply <br>
    I love you so much<br>
    I love the sound of your voice <br>
    And the way we used to touch <br>
    <br>
    I love your kind and thoughtful ways <br>
    And the joy you bring to my life every day <br>
    I love you today as I have from the start <br>
    I'll love you forever with all my heart.`
    ],
    [
        `There's something about<br>
    how the sea draws me in<br>
    much like your eyes<br>
    even though I know I could drown<br>
    I'm always going to try to swim`
    ],
    [
        `If I could close my eyes and make a wish <br>
    The only thing worth asking for is just one kiss <br>
    Because I thought about it since the day you walked in my life. <br>
    There's no way to deny how I'm feeling inside <br>
    Because in a matter of time you'll be mine.`
    ],
    [
        `When the moon shines on your face, <br>
    I feel the warmth of the sun.<br>
    I feel your beauty beckoning me into your arms.<br>
    The soft touch of your hand on mine<br>
    Truly lets me know what love is for the first time.<br>
    Your heart touches those who choose to feel.<br>
    When I see you, I pinch myself to see if this is real.<br>`
    ],
    [
        `I don’t want attachment, I want love.<br>
    <br>
    I don’t want you to be with me, <br> 
    because it hurts you to not be with me.<br>
    I want you to be with me, <br>
    because being with me<br>
    makes you feel the most alive you’ve ever felt.	`
    ],
    [
        `Always and forever is so far away, <br>
    But know I'll stand by you for every last day, <br>
    <br>
    Your beauty shines like a warming ray<br>
    That keeps me from ever falling astray.<br>
    <br>
    Our love is strong and here to stay.<br>
    Hold onto us and we'll find a new way.<br>
    <br>
    One that won't have any gray, <br>
    Only love that will never fray... <br>
    <br>
    Always and forever, baby.`
    ],
    [
        `In cracked skin<br>
    and calloused hands<br>
    morning light<br>
    and greying hair<br>
    in memories<br>
    of the first touch<br>
    and the taste of lips<br>
    I love you here<br>
    I loved you there<br>
    I love you now<br>
    I loved you then<br>
    time will never be a friend<br>
    but our love will never end`
    ],
    [
        `Drowning my heart with your eyes,<br>
    Conjuring passion that never dies,<br>
    Bright, serene and filled with mystery,<br>
    Amazing how it sparks the chemistry,<br>
    Merely gazing at them makes me cheer,<br>
    Gives me hope and sets my mind clear,<br>
    Brilliance glaring from the mellow iris,<br>
    Looking through them is truly bliss.`
    ],
    [
        `I hear your voice,<br>
    I see you grin,<br>
    I taste your lips,<br>
    I breathe you in,<br>
    I hold you close,<br>
    I touch your skin.<br>
    <br>
    My sixth sense says,<br>
    "Sie is deine Lieblingslangeschicksalschatz!"`
    ],
    [
        `You fill the room with sweet sensation<br>
    distracting bits of information<br>
    crowd the space where logic dwells<br>
    distorting sights and sounds and smells<br>
    touching me with tactile pleasure<br>
    pushing me beyond a measure<br>
    of reasonable doubt that soon I sense<br>
    I'm nowhere in the present tense.`
    ],
    [
        `There is a beautiful world where I can see your face,<br>
    It exists only between time and space<br>
    Time shreds space like worn out fashion,<br>
    And leaves us desperate for our precious compassion<br>
    Space consumes time without our consent,<br>
    And hides the reality that our dreams were once spent<br>
    Our love is regained when we meet in between<br>
    And there we can dance again in our dream`
    ],
    [
        `I can be the silence<br>
    when the world around you<br>
    gets to be too loud.<br>
    <br>
    I can be the rain<br>
    pattering on your rooftop<br>
    when you need that lullaby.<br>
    <br>
    I can be anything<br>
    you want and need<br>
    to make this life settle in<br>
    and be at ease. <br>`
    ],
    [
        `The world seems<br>
    somehow slower<br>
    when you are<br>
    next to me.<br>
    As though my senses<br>
    cannot focus<br>
    on anything<br>
    but you.<br>`
    ],
    [
        `You and I were meant to be<br>
    We didn't see it at first maybe<br>
    But as time goes,<br>
    emotion grows...<br>
    I'm glad that it was me you chose.`
    ],
    [
        `A squillion stars shine in the sky.<br>
    Soaring angels sing sweet songs nearby.<br>
    I wake and smile, my dreams are true.<br>
    The star in my arms, my sun, is you.`
    ],
    [
        `Come a little closer<br>
    Honey, come a little closer, <br>
    let me whisper in your ear. <br>
    Let me tell it to you softly, <br>
    So that no one else will hear. <br>
    What I have to say is private, <br>
    and is just between us two; <br>
    just want you, to know how much, <br>
    I love the things you do`
    ],
    [
        `My eyes miss your body<br>
    My hands miss you hips<br>
    My heart misses your presence<br>
    And my mouth misses your lips`
    ],
    [
        `I love you with my heart.<br>
    I love you with my soul.<br>
    I know you don't believe in me,<br>
    but trust me, for I know.<br>
    My love is deep,<br>
    my love is true,<br>
    and it will never fade.<br>
    So tell me now<br>
    and tell me true<br>
    DO YOU LOVE ME TOO?`
    ],
    [
        `My heart beats for you.<br>
    My eyes search for you,<br>
    And my love always waits for you.<br>
    How much I miss you nobody knows.<br>
    My silent tears wait for your love. <br>
    How much I love you nobody knows, <br>
    But you were born to be mine...`
    ],
    [
        `How do I start? <br>
    What do I say? <br>
    I love you and you take my breath away?<br>
    Do I say hold me tight, keep me warm all through the night? <br>
    So how do I start?<br>
    I start like this: hold me, love me, teach me, move me, motivate me to do something great.<br>
    Now that I've started, how do I end? <br>
    I end like this <br>
    I LOVE YOU!!!`
    ],
    [
        `The sound of your voice<br>
    Calling me by what I wish to be,<br>
    Ripples through the blood within me,<br>
    Causing my heart to melt,<br>
    Leaving me with a ridiculous smile <br>
    Planted on my face.	`
    ],
    [
        `I know I have an angel.<br>
    She was sent from heaven above<br>
    To protect me every day<br>
    And give me lots of love.<br>
    <br>
    She's there when I'm lonely.<br>
    She sits by me when I cry.<br>
    She encourages me when I'm down<br>
    And makes me want to try.`
    ],
    [
        `This passionate morning<br>
    I wish I woke up with<br>
    Your feminine body,<br>
    With your seductive eyes,<br>
    with your soft kisses,<br>
    saying I love you.`
    ],
    [
        `You and me are one of a kind,<br>
    You and me are a perfect kind.<br>
    We can't do everything forever,<br>
    But I wish we could do everything together.<br>
    You and me can do it,<br>
    If we put our hearts into it.`
    ],
    [
        `Your eyes are fire.<br>
    Their image burnt into my soul,<br>
    Scarred by beauty.`
    ],
    [
        `Love is when that special someone kisses you. <br>
    Love is having someone to talk to. <br>
    Love is being romantic on that one day. <br>
    Love is happiness that is shown day after day <br>
    THAT'S WHAT LOVE IS!`
    ]
];

function reload() {
    const index = Math.floor(Math.random() * (poems.length - 1));
    const poem = poems[index];
    p.innerHTML = poem;
    poemElement.appendChild(p);
}

reload();

heart.addEventListener("click", reload);
