Combinations where referees can and have to be assigned are (some ranges include totally fine combinations but it easier to wrap them together here):


 Return game false:
     Groups 2:
        fields 2:
            Teams1: 3
                Teams2: 4,5
            Teams1: 4
                Teams2: 5
        fields 3:
            Teams1 + Teams2 >= 9
        fields 4:
            Teams1 + Teams2 >=12

 Return Game true:
    Groups 1:
        fields 1:
            Teams 3-12
        fields 2:
            Teams 6-12
        fields 3:
            Teams 9-12
        fields 4:
            Teams 12
     Groups 2:
        fields 1:
            Teams1 + Teams2 = 6 to 24
        fields 2:
            Teams1 + Teams2 = 6 to 24
        fields 3:
            Teams1 + Teams2 = 9 to 24
        fields 4:
            Teams1 + Teams2 = 12 to 24




Then there are combinations, that are not sensible, or where the algorithm produces a schedule where
games don't have a referee but there are not enough teams available to assign.
All of the deprecated combinations include:

 Return Game false:
    Groups 1:
        fields 2:
            Teams 3-5
        fields 3:
            Teams 3-8
        fields 4:
            Teams 3-11
    Groups 2:
        fields 3:
            Teams1 + Teams2 < 9
        fields 4:
            Teams1 + Teams2 < 12

 Return Game true:
    Groups 1:
        fields 2:
            Teams 3-5
        fields 3:
            Teams 3-8
        fields 4:
            Teams 3-11
    Groups 2:
        fields 3:
            Teams1 + Teams2 = 3 to 8
        fields 4:
            Teams1 + Teams2 = 3 to 11


All non-listed combinations are unproblematic