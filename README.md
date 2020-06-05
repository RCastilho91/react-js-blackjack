# 21! A Free Online Blackjack Application

A simple Blackjack game being developed with vanilla JavaScript for the functionalities, React.js for the front-end.

For the first release, this application will not feature a betting system. A React Native application will be developed in the future for smartphone app release, but will initially be a responsive application that can easily be played through a phone browser.

## 1. The Rules of Blackjack

Blackjack is played with a single deck of regular playing cards, excluding jokers, totaling 52 cards. It is played between two people: the player and the dealer (otherwise known as "the house").

The objective is to draw cards that sum a total of 21 points, or as close to it as the player can. Any scores over 21 will result in a bust and the holder of said hand will be "bust", losing that game.

## 2. Card valuation
- Cards between 2 and 10 hold their numerical value, regardless of suit.
- Jacks (J), Queens (Q) and Kings (K) are worth 10 points each, regardless of suit.
- Aces can be worth either 1 or 11 points, regardless of suit.

Aces are valued depending on the total points a player has at hand. If the player will be bust due to the sum of their cards' values, the aces in their hands will be progressively diminished in value so that doesn't happen.

### 2.1. Example 1
**Player's hand:** K, A
**Player's hand value:** 21 (blackjack)

### 2.2. Example 2
**Player's hand:** A, A
**Player's hand value:** 12

In this case, if both aces were worth 11, player would go bust by having a 22-point total. Thus, one of the aces have their value diminished to 1 so that it doesn't happen.

### 2.3. Example 3
**Player's hand:** K, A, 7
**Player's hand value:** 18 (blackjack)

In this case, if the ace were worth 11, player would go bust by having a 28-point total. Ace's value is downgraded to 1 to favor them.

## 3. Game dynamic

To start the game, each participant receives 2 cards. One of the dealer's cards is not revealed at first, while the other is. Both the player's cards are revealed at once.

The dealer verifies their hidden card. If the combination of the dealer's first two cards results in 21, the house wins, regardless of the player's hand.

If the dealer's hand does not add up to 21 from the start, the player decides if they want another card (a hit). If they do, a card will be dealt to them, and its value will be added to their total.

A player can decide to hit as many times as they would like, provided their total points do not go over 21. Once the player is satisfied, or feel it's too risky to draw another card, they may stand.

Once the player stands, the dealer will deal cards to themselves until they are equally satisfied and also stands. **In this application, dealer will stand whenever their result reaches 17 points or more.**

The player will be declared the winner if their point total is higher than the dealer's, or if the dealer goes bust (score greater than 21 points). A tie is possible if both the player and the dealer stand at the same total score.

## 4. Application development roadmap

21! is a portfolio project to showcase JavaScript, CSS and React.js capabilities. It will have a short development cycle, featuring:

**- V0:** a web-based, single page responsive application that'll cover all of the game dynamics described in item 3 of this document.
**- V1:** a betting system will be added with fictional currency and counters of games played, games won will be added to every session so the player keeps track of their success.
**- V2:** development of a React Native mobile application featuring the same capabilities.
