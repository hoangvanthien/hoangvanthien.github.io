g++ change_to_kramdown.cpp
./a.out < $1 > temporary.txt
mv temporary.txt $1
rm a.out
