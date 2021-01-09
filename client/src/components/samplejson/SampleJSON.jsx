import React from 'react';
import './SampleJSON.scss'

function SampleJSON() {
    return (
        <div className="sample">
            <h1>SAMPLE JSON</h1>
            <h4>/artist</h4>
            <blockquote>
                <pre>
                    {
                `{name: ["Grayson Perry"],
    portraitImg: ["https://gerryco23.files.wordpress.com/2014/11/grayson-perry.jpg?w=725&h=408"],
    _id: "5eecc4df3ab7340004ed4fed",
    artistBio: [{
        _id: "5eecc4df3ab7340004ed4fee",
        description: "Grayson Perry, born March 24 1960 is an English contemporary artist, writer and broadcaster. 
        He is known for his ceramic vases, tapestries and cross-dressing, as well as his observations of the contemporary
        arts scene, and for dissecting British prejudices, fashions and foibles.Perry's vases have classical forms 
        and are decorated in bright colours, depicting subjects at odds with their attractive appearance. There is a
        strong autobiographical element in his work, in which images of Perry as Claire, his female alter-ego, and Alan Measles,
        his childhood teddy bear, often appear. He has made a number of documentary television programmes and has curated
        exhibitions. He has published two autobiographies, Grayson Perry: Portrait of the Artist as a Young Girl (2007)
        and The Descent of Man (2016), written and illustrated a graphic novel, Cycle of Violence (2012), written a book 
        about art, Playing to the Gallery (2014), and published his illustrated Sketchbooks (2016). Various books describing 
        his work have been published. In 2013 he delivered the BBC Reith Lectures. Perry has had solo exhibitions at the 
        Bonnefantenmuseum, Stedelijk Museum Amsterdam, the Barbican Centre,[5] the British Museum and the Serpentine Gallery 
        in London, the Arnolfini in Bristol, The Andy Warhol Museum in Pittsburgh, and the 21st Century Museum of Contemporary 
        Art, Kanazawa, Japan. His work is held in the permanent collections of the British Council and Arts Council, Crafts
        Council, Stedelijk Museum Amsterdam, Tate and Victoria and Albert Museum, London. He was awarded the Turner Prize
        in 2003. He was interviewed about the win and resulting press in Sarah Thornton's Seven Days in the Art World. 
        In 2008 he was ranked number 32 in The Daily Telegraph's list of the 100 most powerful people in British culture. 
        In 2012, Perry was among the British cultural icons selected by artist Peter Blake to appear in a new version of 
        his most famous artwork—the Beatles' Sgt. Pepper's Lonely Hearts Club Band album cover—to celebrate the British 
        cultural figures of his life",
        source: "https://en.wikipedia.org/wiki/Grayson_Perry"},
    {_id: "5eecc4df3ab7340004ed4fef",
        description: "Winner of the 2003 Turner Prize, Grayson Perry creates ceramics and other objects that explore diverse
        historical and contemporary themes. Drawn in by the beauty of his objects, which are covered with sgraffito drawing,
        handwritten and stenciled text, transferred photographs, and sumptuous glaze, at close range viewers apprehend 
        darker subjects and narrative hints to environmental disaster and child abuse. Autobiographical references to 
        the artist's childhood, family, and transvestite alter ego Claire are intertwined with his political and allegorical
        references, creating a challenging conflict between his dark themes and the rich beauty of his works.",
        source: "https://www.artsy.net/artist/grayson-perry"}],
        galleryName: [
            {
                _id: "5eecc4df3ab7340004ed4ff0",
                name: "Saatchi",
                website: "https://www.saatchigallery.com/"
            }
            ],
        portfolio: [{
            images: [
                "https://6d49d47bd32a151032ae-907965fc79c9900a93c12efeb23103bd.ssl.cf1.rackcdn.com/artworks/grayson-perry-barbarics.jpg"
                ],
                _id: "5eecc4df3ab7340004ed4ff1",
                title: "Barbaric Splendour",
                description: "Perry's forms and content are always incongruous: classic Greecian-like urns bearing friezes of 
                car-wrecks, cell-phones, supermodels, as well as more dark and literary scenes, often incorporate auto-biographical
                references.",
                dimension: "Glazed ceramic, 67cm x 35cm",
                date: "2003",
                source: "https://www.saatchigallery.com/artists/artpages/grayson_perry_barbaric_splandour.htm"},
                ]`}
                </pre>
            </blockquote>
        <h4>/artist/id</h4>
            <blockquote>
                
        </blockquote>
        </div>
    );
};

export default SampleJSON