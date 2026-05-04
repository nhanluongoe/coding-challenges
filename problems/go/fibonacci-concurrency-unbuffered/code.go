package main

import (
	"fmt"
	"time"
)

var quit = make(chan bool)

func fib(ch chan float64) {
	x, y := 1.0, 1.0

	for {
		select {
		case ch <- x:
			x, y = y, x+y
		case <-quit:
			fmt.Println("Done calculating!")
			return
		}
	}
}

func main() {
	start := time.Now()

	command := ""
	data := make(chan float64)

	go fib(data)

	for {
		num := <-data
		fmt.Println(num)
		fmt.Scanf("%s", &command)
		if command == "quit" {
			quit <- true
			break
		}
	}

	elapsed := time.Since(start)
	fmt.Printf("Done! It took %v seconds!\n", elapsed.Seconds())
}
