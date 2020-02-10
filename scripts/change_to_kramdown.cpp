#include <iostream>
using namespace std;

int main() {
    string s;
    while (getline(cin, s)) {
        for (int i = 0; i < s.size(); ++i) {
            cout << s[i];
            if (s[i] == '$' && (i == 0 || s[i-1] != '$') && (i+1 == s.size() || s[i+1] != '$'))
                cout << '$';
        }
        cout << endl;
    }
}