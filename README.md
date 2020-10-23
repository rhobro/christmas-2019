# ChristmasPresentHunt Vaadin Application

This was a project created by me in order to create a "treasure hunt" situation.
The need for this project arose when I bought a
[Giant 4.5kg Toblerone bar](https://www.amazon.co.uk/Toblerone-Milk-Chocolate-Jumbo-4-5kg/dp/B004INT01A)
for my parents for Christmas 2019. After the order arrived, I realised that I would have to hide the bar
in its packaging somewhere in the house where my parents would not find it (behind the sofa works well in
my house!). Since I realised that I would be fast asleep and snoring on the night of Christmas Eve, I came
to conclude that waking up at the middle of the night to move the present under the tree was not an option
(it would have been very embarrassing to have my parents find me at midnight, holding a suspicious Amazon
delivery package which was nearly as big as me!).

I decided then to use Vaadin to develop a Progressive Web App (PWA) which would run using Maven Jetty on my
laptop and my parents would be able to hunt down the gift. I even added functionality to print out statements
when my parents reached each round. I totally used 2 rounds (because Christmas is a time for people to share gifts
and not bang their heads on the wall trying to solve a treasure hunt problem!) but you can use how many ever rounds
you need by modifying a fork of this repository.

I hope you will be able to use it for a worthy recipient who you want to show that you appreciate them!

### Installation and Dependencies

It requires Java 8 or newer and node.js 10.16 or newer.

To run the project, run `mvn jetty:run` and open [http://localhost:8080](http://localhost:8080) in browser.

To update to the latest available Vaadin release, issue `mvn 
versions:update-properties`

Some useful links:
- [Feature overview](https://vaadin.com/flow)
- [Documentation](https://vaadin.com/docs/flow/Overview.html)
- [Tutorials](https://vaadin.com/tutorials?q=tag:Flow) 
- [Component Java integrations and examples](https://vaadin.com/components)
