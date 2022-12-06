var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = HashBlotto","category":"page"},{"location":"#HashBlotto","page":"Home","title":"HashBlotto","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for HashBlotto.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [HashBlotto]","category":"page"},{"location":"#HashBlotto.HashBlotto","page":"Home","title":"HashBlotto.HashBlotto","text":"HashBlotto\n\nA package that is build by the HashBlotto Team in C25.  The project is based on the Google HashCode 2014 competition.\n\n\n\n\n\n","category":"module"},{"location":"#HashBlotto.distributions-NTuple{4, Any}","page":"Home","title":"HashBlotto.distributions","text":"distributions(city, min, max, step)\n\nShows the distributions of the distances of the city at different penalty values\n\n\n\n\n\n","category":"method"},{"location":"#HashBlotto.get_best_street","page":"Home","title":"HashBlotto.get_best_street","text":"get_best_street(current_junction, street_candidates, visited)\n\nReturns the \"best\" adjacent junction based on our greedy heuristic from getjunctionvalue\n\n\n\n\n\n","category":"function"},{"location":"#HashBlotto.get_junction_value-Tuple{Any, Any, Any}","page":"Home","title":"HashBlotto.get_junction_value","text":"get_junction_value (current_junction, visited, penalty)\n\nReturns the value of the current junction.  The current reward system acting under the reward equation:\n\nval * penalty ^ visited[node] \n\n\n\n\n\n","category":"method"},{"location":"#HashBlotto.graph_structure-Tuple{HashCode2014.City}","page":"Home","title":"HashBlotto.graph_structure","text":"graph_structure(city::City)\n\nGiven the city the function will return a precomupted adjacency dictionary. The keys of the dictionary will hold the the index of the vertice The values of the dictionary will be a list of tuples of (nextnodeindex, distance, duration, distance/duration)\n\n\n\n\n\n","category":"method"},{"location":"#HashBlotto.greed-Tuple{Any}","page":"Home","title":"HashBlotto.greed","text":"greed(City)\n\nGenerates a Greedy Solution to the HashCode Challenge The overall logic is below:     - At every junction look at the adjacent streets and look at their value (duration/distance)     - If a street has been visited before, we penalize it by making a new value equal: value * (penalty = 0.01 ^ # of times visited)\n\nEach car is sent out one at a time and the car will continue to move until it reaches the end of the time limit or it reaches a dead end. At that point the next car will start or the solution will be returned.\n\n\n\n\n\n","category":"method"}]
}
