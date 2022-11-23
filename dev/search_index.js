var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = HashBlotto","category":"page"},{"location":"#HashBlotto","page":"Home","title":"HashBlotto","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for HashBlotto.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [HashBlotto]","category":"page"},{"location":"#HashBlotto.HashBlotto","page":"Home","title":"HashBlotto.HashBlotto","text":"HashBlotto\n\nA package that is build by the HashBlotto Team in C25.  The project is based on the Google HashCode 2014 competition.\n\n\n\n\n\n","category":"module"},{"location":"#HashBlotto.all_random-Tuple{Any}","page":"Home","title":"HashBlotto.all_random","text":"all_random(city)\n\nFunction that returns the best random solution after 10 iterations  of the random solution and returns the best random solution of those 10.\n\n\n\n\n\n","category":"method"},{"location":"#HashBlotto.get_edge_dictionary-Tuple{Any}","page":"Home","title":"HashBlotto.get_edge_dictionary","text":"get_edge_dictionary(city)\n\nA helper function that extracts a dictionary mapping adjacent edges. Particularly: input: A city object output: Dict(junctions .=> (possible_neighbor, duration, distance))=\n\n\n\n\n\n","category":"method"},{"location":"#HashBlotto.greed-Tuple{Any}","page":"Home","title":"HashBlotto.greed","text":"greed(City)\n\nfunction that is greedy in it's approach to finding the best path, the logic it follows is looking at the distance/time ratio of the next junction and choosing the one with the highest ratio, if a car has already gone down one of the roads then we will calculate the reward based off of reward/ 2 * times it has gone down the road –––––––––––––––––––––––––––––––––––– Building off of the HashCode2014 package (https://github.com/gdalle/HashCode2014.jl) that  was already built out for us, I definetly made it better as it is smarter in how it chooses paths than (https://github.com/gdalle/HashCode2014.jl/blob/main/src/random_walk.jl)\n\n\n\n\n\n","category":"method"}]
}
