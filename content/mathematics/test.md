---
date: '2025-01-28T23:18:36Z'
draft: true
title: 'Test'
---

## Lemma 1.2
**Claim:** 
The arithmetic mean of two distinct real numbers lies between them exclusively.
<!--more-->

**Proof:**
Let $p$ be a real number. We will show that for some real number $m$, either $m < p$ or $p< m$ is true. Since $p-m \in \mathbb{R}$, the usual axioms of real numbers apply to $p-m$. By *R1*, exactly one of the following is true: $0 < p-m$, $p-m=0$, or $p-m < 0$. Applying *R3* with $c = m$ shows that exactly one of the following is true: $m < p$, $p=m$, or $p < m$. It follows that $p \neq m \implies (m < p) \lor (p < m)$. From this we take $q \in \mathbb{R}$, with $p < q$, arbritarily. Note that $p + p < q + p$ (by R5), i.e, $2p < p + q$. Similarly, $p + q < q + q$, which is equivalent to $p + q < 2q$. Hence, $2p < p + q < 2q$. Applying *Proposition 3.4* with $x=1/2$ gives $p < \frac{p+q}{2} < q$, where $\frac{p+q}{2}$ is the arithmetic mean by definition. $\ \square$ 

