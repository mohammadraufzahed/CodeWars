package kata

func CountSheeps(numbers []bool) (counter int) {
	for i := 0; i < len(numbers); i++ {
		if numbers[i] {
			counter++
		}
	}
	return counter
}
