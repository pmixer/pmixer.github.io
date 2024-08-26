[draft]

I would not try to figure something out like the Euclidean algorithm if not forced to solve great common divisor(GCD) problem as fast as possible.

Personally, I prefer to get the prime list firstly, then use the list to do the factorization of input numbers, finally get back the GCD by taking the product of their common prime divisors.

Well, the Euclidean algorithm is still beautiful and far more efficient, just way too like a special build for fast GCD computation.

Say, `A = GCD * PAPF`(`PAPF` for product of A's unique prime factors), `B = GCD * PBPF`, we would like to reduce `PAPF, PBPF` as fast as possible.

Assuming `PAPF > PBPF`, making `PAPF - N * PBPF` could quickly reduce PAPF value, where largest `N` should be `PAPF / PBPF` and `PAPF` become `PAPF % PBPF`.

Which more details added, my personal explaination of the Euclidean algorithm could be finished.
