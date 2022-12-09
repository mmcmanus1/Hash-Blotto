var documenterSearchIndex = {"docs":
[{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"\\documentclass{article} \\usepackage{amsmath}","category":"page"},{"location":"algorithm/#HashBlotto's-Algorithm-for-Google-Hash-Code-2014","page":"Algorithm","title":"HashBlotto's Algorithm for Google Hash Code 2014","text":"","category":"section"},{"location":"algorithm/#Introduction","page":"Algorithm","title":"Introduction","text":"","category":"section"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"HashBlotto used a greedy algorithm that used a Depth First Search-esque algorithm to maximize the overall distance we could traverse given the city input file. How we went about attempting to solve the problem can be seen below.","category":"page"},{"location":"algorithm/#The-Problem","page":"Algorithm","title":"The Problem","text":"","category":"section"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"The problem we were presented with was the 2014 Google Hashcode Problem. As seen here The goal of the problem is to attempt to cover the maximum possible distance of Paris, in this context we were given eight google street view cars to work with and were told to make it into a Julia Package.","category":"page"},{"location":"algorithm/#The-Algorithm","page":"Algorithm","title":"The Algorithm","text":"","category":"section"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"The Algorithm that we came up with is a greedy algorithm that goes through each car one by one. The algorithm follows the follwing steps:","category":"page"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"1. From the current junction look at all possible street segment that can be taken \n\n2. Select the best possible street segment that can be taken based off our value / penalty function \n\n3. Once the best street is selected, record the street seen in a dictionary that keeps track of the number of times we have seen a street\n\n4. Continue to repeat the algorithm until you reach a dead end or run out of time.","category":"page"},{"location":"algorithm/#Value","page":"Algorithm","title":"Value","text":"","category":"section"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"The value that we use is distance / time. The reason we use this is because we want to maximize the distance we can travel in the given time, so it makes sense to traverse the streets that have the highest distance / time ratio.","category":"page"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"$","category":"page"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"\\text{value} = \\frac{\\text{distance}}{\\text{time}} $","category":"page"},{"location":"algorithm/#Penalty","page":"Algorithm","title":"Penalty","text":"","category":"section"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"If we had already been traversed down a street we would encorporate a penalty factor to the value. The penalty factor that we used was f(v p n) = v * (p)^n where v is value (distance/time ), p is the penalty factor, and n is the number of times we have traversed down that street. ","category":"page"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"This results in the following functions:","category":"page"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"if n = 0, then the value is the same as the value that we calculated before.","category":"page"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"if n > 1, then the value is the value that we calculated before multiplied by the penalty factor to the power of the number of times we have traversed down that street.","category":"page"},{"location":"algorithm/#The-Results","page":"Algorithm","title":"The Results","text":"","category":"section"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"The best distance that we found using this algorithm was 1,544,934. ","category":"page"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"The way we found this was by looking at the distribution of the differnet penalty factors and finding the best penalty factor that would maximize the distance we could travel. We foudn that the best penalty factors was 0.01, this makes sense because the more times we have traversed down a streets the less value we should give it. By going about the algorithm this way we were able to explore new areas of the city that we had not seen before.","category":"page"},{"location":"algorithm/#Analysis-of-Upper-Bound","page":"Algorithm","title":"Analysis of Upper Bound","text":"","category":"section"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"Our upper bound works on Polya's principle of adapting a solution from a simpler problem. Formally, our problem is to find a maximal length sequence p^* = v_i in mathcalP with vertices v_i such that ","category":"page"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"forall p in mathcalP textcoverage(p^*) geq textcoverage(p) (v_i v_i+1) in E texttime(p^*) leq textAllowed Time","category":"page"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"A natural relaxation of this problem would be to remove the edge constraint (equivalently, to allow teleportation between vertices) and solve the following problem:","category":"page"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"forall p in mathcalP textcoverage(p^*) geq textcoverage(p) texttime(p^*) leq textAllowed Time","category":"page"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"Under such a relaxation, the distance of the unconstrained path is a trivial upper bound; to find an optimal path, we take the supremum over all possibilities in mathcalP [in this case, a maximum, since mathcalP is finite]. The maximum is non-decreasing under the addition of more elements (which is what happens when we remove constraints, unless we happen to end up with the same problem), so our upper bound in the relaxation is an upper bound for both problems.","category":"page"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"With the formal proof out of the way, let's get to the implementation. ","category":"page"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"The implementation sorted the paths in reverse order in terms of the fractextdistancetextduration ratio, took the path that had the highest ratio, traversed it, and removed it from the list of possible paths. This meant that at each  timestep, each car was able to teleport to a different vertex to maximize its distance, consistent with our mathematical formulation. We used a graph structure that only had unidirectional streets, so as to not go through a street twice [teleportation meant it didn't matter which we kept]. To not deal with the corner cases of time limits, we allowed paths to go over the allowed time as required by the last path, since this would preserve the upper bound property. To this end, we use a further relaxation by having a variable allowed time which is geq textAllowed Time.","category":"page"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"Overall, our result is consistent with our peer's leaderboard result, and when we ran our upper bound test on the full length of time (54000 seconds), our upper bound gave us the street length of Paris, which gave us confidence as to implementation correctness. ","category":"page"},{"location":"algorithm/#Unexplored-/-Unfinished-Ideas-for-Improvement","page":"Algorithm","title":"Unexplored / Unfinished Ideas for Improvement","text":"","category":"section"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"After completing the algorithm we had two ideas to improve the algorithm.","category":"page"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"1: Look at the potential next nodes adjacent steets and look to see if we had or had not been down those streets before. We then give streets a reward or penalty factor depending on how many explored / unexplored streets were connected to the potential next node. Looking at the results of implementing this into the reward function that we found, it did not improve the results.","category":"page"},{"location":"algorithm/","page":"Algorithm","title":"Algorithm","text":"2: Recreate Kruskal's algorithm, and see if we can use it to find the best possible path to take. We decided against this because we thought it may interfere too much with the greedy type algorithm that we were using and thought it would be too much of a change to the algorithm.","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = HashBlotto","category":"page"},{"location":"#HashBlotto","page":"Home","title":"HashBlotto","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for HashBlotto.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [HashBlotto]","category":"page"},{"location":"#HashBlotto.HashBlotto","page":"Home","title":"HashBlotto.HashBlotto","text":"HashBlotto\n\nA package that is build by the HashBlotto Team in C25.  The project is based on the Google HashCode 2014 competition.\n\n\n\n\n\n","category":"module"},{"location":"#HashBlotto.get_best_street","page":"Home","title":"HashBlotto.get_best_street","text":"get_best_street(current_junction, street_candidates, visited)\n\nReturns the \"best\" adjacent junction based on our greedy heuristic from getjunctionvalue\n\n\n\n\n\n","category":"function"},{"location":"#HashBlotto.get_junction_value-Tuple{Any, Any, Any}","page":"Home","title":"HashBlotto.get_junction_value","text":"get_junction_value (current_junction, visited, penalty)\n\nReturns the value of the current junction.  The current reward system acting under the reward equation:\n\nval * penalty ^ visited[node]\n\n\n\n\n\n","category":"method"},{"location":"#HashBlotto.graph_structure-Tuple{HashCode2014.City}","page":"Home","title":"HashBlotto.graph_structure","text":"graph_structure(city::City)\n\nGiven the city the function will return a precomupted adjacency dictionary. The keys of the dictionary will hold the the index of the vertice The values of the dictionary will be a list of tuples of (nextnodeindex, duration, distance/duration)\n\n\n\n\n\n","category":"method"},{"location":"#HashBlotto.greed-Tuple{Any}","page":"Home","title":"HashBlotto.greed","text":"greed(City)\n\nGenerates a Greedy Solution to the HashCode Challenge The overall logic is below:     - At every junction, look at the adjacent streets and look at their value (duration/distance)     - If a street has been visited before, we penalize it by making a new value equal: value * (penalty = 0.01 ^ # of times visited)\n\nEach car is sent out one at a time and the car will continue to move until it reaches the end of the time limit or it reaches a dead end. At that point the next car will start or the solution will be returned.\n\n\n\n\n\n","category":"method"}]
}
