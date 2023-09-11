# QLessSolver

> Warning! Using this app can make QLess less fun, use at your own risk!

[Live Version](https://TWalkerSMCM.github.io/QLessSolver/)

This app is front end for a Java app I wrote that solves the popular game [QLess](https://q-lessgame.com/) which is based on the [World Fastest Scrabble Program](https://www.cs.cmu.edu/afs/cs/academic/class/15451-s06/www/lectures/scrabble.pdf) paper which describes a solution to solving scrabble.

While QLess is not scrabble, a variation on the algorithm can be used to solve it, the same rules of where we can add words applies, which is the bulk of the logic. The algorithm is described in the detail in paper above, and I found this [YouTube video](https://www.youtube.com/watch?v=9cytoYiF9uY) by boringcactus helpful in implementing it. 

In this implementation, I have a couple of dictionaries to choose from as while some words are valid in QLess (by existing in the scrabble dictionary), they are not satisfying and I wanted to be able to filter them out. Large dictionaries full of "good" words don't really exist, so I have included a couple of options. The most 10k common words in the english language, a list of common nouns I found and a list of words that are valid in scrabble.

I have a separate Java app that does the solving that I'll link to here later, it's hosted via a Google Cloud Function as that was the most cost effective way I could find to host it.

If you are a React guru, peering behind the curtain may be hideous, this is my first react app, and I'm sure I've done a lot of things wrong. Feel free to open an issue or PR if you see something that could be improved.



