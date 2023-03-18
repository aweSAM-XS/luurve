const heart = document.querySelector('.heart');
const poem = document.querySelector('.poem');
const poems = [
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> As nectar fills the flower,
            <br />
            giving sustenance to the bee,
            <br />
            I need you every hour,
            <br />
            to give your love to me.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> If I write a love letter and
            send it to you,
            <br />
            Will you write back in a day or two?
            <br />
            Will you scribble kind words in soft curling ink?
            <br />
            Will you seal it with lips that are curving and pink?
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> When I can’t say it with
            words, look into my eyes
            <br />
            and you’ll find infinite true love I can’t vocalize.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> My love is a promise, an
            unbreakable bond.
            <br />
            Forever I’ll love you, here and beyond.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> Like bees love honey, and
            flowers love sun,
            <br />I love you, my darling, you’re the only one.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> A chance encounter, really
            just a glance;
            <br />
            And now my heart, my very soul, doesn’t stand a chance.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> When I’m down, you lift me up.
            <br />
            When I’m hurting, you make me well.
            <br />
            Your love is over the top, and
            <br />
            I’m forever under your spell.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> If time could ease its
            relentless march when we’re together,
            <br />
            and hasten its plodding pace when we’re apart,
            <br />
            I could spend an eternity in your arms,
            <br />
            to savor love everlasting in my heart.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> My joy is complete when I’m
            with you.
            <br />
            Our time is sweet and our love is True.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> To feel your hands warm on my
            face,
            <br />
            To hold you close in a loving embrace,
            <br />
            To kiss your lips with passion and peace,
            <br />
            I’d give everything and ask time to cease.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> My compass points to you,
            <br />
            and all pathways lead home.
            <br />
            I always find you waiting,
            <br />
            no matter where I roam.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> Your smile never fails to move
            me.
            <br />
            Your touch leaves me breathless.
            <br />
            You speak, and I’m removed from this world,
            <br />
            to a place where love is deathless.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> I didn’t start out to end this
            way,
            <br />
            so in love that I can’t see straight.
            <br />
            Now how can life be anything but this?
            <br />
            Encountering you was always my fate.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> To win you over, I gave my
            all.
            <br />
            You are worth everything.
            <br />
            Our trophy is love, to treasure forever,
            <br />
            and its symbol is this ring.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> My love for you is an intense
            longing.
            <br />
            No one has loved like this before.
            <br />
            And I will love you deeply, truly,
            <br />
            now and forevermore.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> Your love waters my soul,
            feeds my being, keeps me alive.
            <br />
            Your devotion is my very essence, allowing me to thrive.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> Your hands have held me,
            stroked my hair,
            <br />
            touched me gently, showed you care.
            <br />
            Your lips have kissed me, brushed my cheek,
            <br />
            tasted my tears, made me weak.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> I live for you only.
            <br />
            Your lips alone fit into mine.
            <br />
            I need your love exclusively.
            <br />
            Your matchless love is divine.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> Our love is a familiar
            rendition, notes played softly, a revival of peace.
            <br />
            Sometimes it’s a crashing symphony, passionately played, a joyful
            masterpiece.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> Our future is a gift to be
            opened,
            <br />
            filled with unimaginable treasures.
            <br />
            It’s a book to be read,
            <br />
            brimming with all of life’s pleasures.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> If I were a bird,
            <br />
            a robin or a jay,
            <br />
            I’d fly to your house,
            <br />
            and serenade you all day.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> Tonight, look up and see the
            moon.
            <br />
            I’m looking too, and I’ll be with you soon.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> When the stars are bright and
            the moon is glowing,
            <br />
            Our river of love will soon be flowing.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> Like a river to the sea,
            <br />
            bring your sweet love home to me.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> Your love is magic, a
            bewitchment, a spell.
            <br />
            But how much you love me, I never can tell.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> You’re a beckoning force, a
            magnetic soul.
            <br />I can’t turn away because you make me whole.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> You whisper soft love with
            lips that beckon.
            <br />
            And I can’t live without you for even one second.
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> How many days have we been in
            love?
            <br />
            How many secrets have we spoken of?
            <br />
            How many wishes have yet to come true?
            <br />
            How many wonders will I see with you?
        </p>
    ],
    [
        <p style='text-align: center'>
            <span style='color: #ff00ff'>♥</span> I knew you were there, but I
            didn’t know your name.
            <br />
            I called for you, but you never came.
            <br />
            I knew it was you, but I didn’t know your face.
            <br />
            Then my soul recognized you; our souls have embraced.
        </p>
    ],
];

console.log(poems.length)