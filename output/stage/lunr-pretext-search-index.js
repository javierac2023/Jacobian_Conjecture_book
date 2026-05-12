var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-1-1",
  "level": "1",
  "url": "sec-1-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Polynomials in two variables and their support",
  "body": " Polynomials in two variables and their support  Polynomials in two variables over a field are expressions of the form   For example:   The support of a polynomial is defined as:    \/\/width=\"400px\" height=\"300px\" Support of P   The algebra has basis .   on elements of the basis, and then extended by bilinearity to arbitrary polynomials. If one of or is a monomial, then the support of the product is the sum of the supports. Here we define the sum and the difference of two subsets and of , by   respectively. For example, if   then  , and so . The supports of , and are shown in .    Example of Supports of , and , with a monomial   In general, we only have . For example, take . Then and so But , and so , which shows that (see ).    A case in which    Newton Polygon  The Newton polygon  Newton polygon  , of a polynomial , is the convex hull of the support of .   Since is a convex set, from it follows that . We will see in that the equality holds, as it is illustrated in , where and are as in .    Newton polygon of the product of two polynomials   "
},
{
  "id": "sec-1-1-6",
  "level": "2",
  "url": "sec-1-1.html#sec-1-1-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "support "
},
{
  "id": "img1-2",
  "level": "2",
  "url": "sec-1-1.html#img1-2",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " \/\/width=\"400px\" height=\"300px\" Support of P  "
},
{
  "id": "sec-1-1-11",
  "level": "2",
  "url": "sec-1-1.html#sec-1-1-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sum difference "
},
{
  "id": "fig_3",
  "level": "2",
  "url": "sec-1-1.html#fig_3",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": "  Example of Supports of , and , with a monomial  "
},
{
  "id": "newton_contenido",
  "level": "2",
  "url": "sec-1-1.html#newton_contenido",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": "  A case in which  "
},
{
  "id": "poligono_de_Newton",
  "level": "2",
  "url": "sec-1-1.html#poligono_de_Newton",
  "type": "Definition",
  "number": "1.1.4",
  "title": "Newton Polygon.",
  "body": " Newton Polygon  The Newton polygon  Newton polygon  , of a polynomial , is the convex hull of the support of .  "
},
{
  "id": "fig_5",
  "level": "2",
  "url": "sec-1-1.html#fig_5",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": "  Newton polygon of the product of two polynomials  "
},
{
  "id": "sec-1-2",
  "level": "1",
  "url": "sec-1-2.html",
  "type": "Section",
  "number": "1.2",
  "title": "The Jacobian determinant and its support",
  "body": " The Jacobian determinant and its support   The (formal) partial derivative of with respect to  partial derivative with respect to is    For example , and so (see ).   and    We suspect that . But, we have , and so, The correct formula is    The partial derivative of with respect to  partial derivative with respect to is    A similar discussion as above shows that the support of is given by For example, if , then and We show the supports of , and in .    Supports of a polynomial and its partial derivatives    Polynomial Maps  A map is called a polynomial map  polynomial map if there exist such that , for all . From now on we will name the polynomial map .    Jacobian Matrix  The Jacobian matrix  Jacobian matrix of is We write and call it the Jacobian determinant or simply the Jacobian  Jacobian of . Moreover, for , we set and Note that and .   Since and , we have and similarly   So, Note that one could also use that in order to obtain the same conclusion. For example, if then So, and As it is shown in , in this example the inclusion is strict.    A case in which the inclusion is strict    For each , we have .    By identity and the fact that and , we know that The result follows immediately from this fact, since is a convex set.   In , we show that for and as in , the inclusion in is strict.    A case in which the inclusion in is strict    Basic Properties of the Jacobian   For each the following facts hold:   is a -bilinear and alternate form.  .  , for all .  .  , for all .      Item 1 is straightforward. Items 4 and 5 follow from items 1, 2 and 3. By the Leibniz rule for the partial derivative of a product, we have   which proves that item 2 is true. Item 3 follows by straightforward induction using item 2.     Let and in . From items 1 and 5 of Lemma it follow that   Hence, by item 4 of Lemma ,   Using this it follows easily that if , then the set is -linearly independent.   From now on we will use Lemma without explicit mention.   Let and . Then   A straightforward computation shows that . We can verify this equality faster, if we note that for , we have and . Then, . In general, if there exist , and , such that and , then . Under certain conditions the reciprocal is true, as we will see in Proposition .  \/\/ P_y_Q_alineados   Prove that if , then and are algebraically independent, or equivalently, that the set is -linearly independent.    "
},
{
  "id": "derivada_parcial_respecto_de_x",
  "level": "2",
  "url": "sec-1-2.html#derivada_parcial_respecto_de_x",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": " The (formal) partial derivative of with respect to  partial derivative with respect to is   "
},
{
  "id": "fig_6",
  "level": "2",
  "url": "sec-1-2.html#fig_6",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " and   "
},
{
  "id": "derivada_parcial_respecto_de_y",
  "level": "2",
  "url": "sec-1-2.html#derivada_parcial_respecto_de_y",
  "type": "Definition",
  "number": "1.2.3",
  "title": "",
  "body": " The partial derivative of with respect to  partial derivative with respect to is   "
},
{
  "id": "fig_7",
  "level": "2",
  "url": "sec-1-2.html#fig_7",
  "type": "Figure",
  "number": "1.2.4",
  "title": "",
  "body": "  Supports of a polynomial and its partial derivatives  "
},
{
  "id": "aplicaciones_polinomiales",
  "level": "2",
  "url": "sec-1-2.html#aplicaciones_polinomiales",
  "type": "Definition",
  "number": "1.2.5",
  "title": "Polynomial Maps.",
  "body": " Polynomial Maps  A map is called a polynomial map  polynomial map if there exist such that , for all . From now on we will name the polynomial map .  "
},
{
  "id": "matriz_jacobiana",
  "level": "2",
  "url": "sec-1-2.html#matriz_jacobiana",
  "type": "Definition",
  "number": "1.2.6",
  "title": "Jacobian Matrix.",
  "body": " Jacobian Matrix  The Jacobian matrix  Jacobian matrix of is We write and call it the Jacobian determinant or simply the Jacobian  Jacobian of . Moreover, for , we set and Note that and .  "
},
{
  "id": "fig_8",
  "level": "2",
  "url": "sec-1-2.html#fig_8",
  "type": "Figure",
  "number": "1.2.7",
  "title": "",
  "body": "  A case in which the inclusion is strict  "
},
{
  "id": "H_P_Q_subset_H_P_plus_H_Q_minus_1",
  "level": "2",
  "url": "sec-1-2.html#H_P_Q_subset_H_P_plus_H_Q_minus_1",
  "type": "Proposition",
  "number": "1.2.8",
  "title": "",
  "body": " For each , we have .  "
},
{
  "id": "sec-1-2-15",
  "level": "2",
  "url": "sec-1-2.html#sec-1-2-15",
  "type": "Proof",
  "number": "1.2.1",
  "title": "",
  "body": " By identity and the fact that and , we know that The result follows immediately from this fact, since is a convex set.  "
},
{
  "id": "fig_9",
  "level": "2",
  "url": "sec-1-2.html#fig_9",
  "type": "Figure",
  "number": "1.2.9",
  "title": "",
  "body": "  A case in which the inclusion in is strict  "
},
{
  "id": "propiedades_basicas_del_jacobiano",
  "level": "2",
  "url": "sec-1-2.html#propiedades_basicas_del_jacobiano",
  "type": "Lemma",
  "number": "1.2.10",
  "title": "Basic Properties of the Jacobian.",
  "body": " Basic Properties of the Jacobian   For each the following facts hold:   is a -bilinear and alternate form.  .  , for all .  .  , for all .    "
},
{
  "id": "sec-1-2-19",
  "level": "2",
  "url": "sec-1-2.html#sec-1-2-19",
  "type": "Proof",
  "number": "1.2.2",
  "title": "",
  "body": " Item 1 is straightforward. Items 4 and 5 follow from items 1, 2 and 3. By the Leibniz rule for the partial derivative of a product, we have   which proves that item 2 is true. Item 3 follows by straightforward induction using item 2.  "
},
{
  "id": "P_Pm_Qn",
  "level": "2",
  "url": "sec-1-2.html#P_Pm_Qn",
  "type": "Remark",
  "number": "1.2.11",
  "title": ".",
  "body": "  Let and in . From items 1 and 5 of Lemma it follow that   Hence, by item 4 of Lemma ,   Using this it follows easily that if , then the set is -linearly independent.  "
},
{
  "id": "sec-1-2-22",
  "level": "2",
  "url": "sec-1-2.html#sec-1-2-22",
  "type": "Example",
  "number": "1.2.12",
  "title": "",
  "body": " Let and . Then   A straightforward computation shows that . We can verify this equality faster, if we note that for , we have and . Then, . In general, if there exist , and , such that and , then . Under certain conditions the reciprocal is true, as we will see in Proposition .  "
},
{
  "id": "sec-1-2-23-1",
  "level": "2",
  "url": "sec-1-2.html#sec-1-2-23-1",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": " Prove that if , then and are algebraically independent, or equivalently, that the set is -linearly independent.  "
},
{
  "id": "sec-1-3",
  "level": "1",
  "url": "sec-1-3.html",
  "type": "Section",
  "number": "1.3",
  "title": "Plane Jacobian conjecture and small examples",
  "body": " Plane Jacobian conjecture and small examples  Let . Since , the chain rule says that   Let be an endomorphism of algebras and write and . Then equality becomes   since , etcetera. Consequently    Polynomial inverse  Let be a polynomial map. We say that f has a polynomial inverse if is invertible and there exist such that .    Clearly is inverse of if and only if     If has a polynomial inverse , then, by   and so   Consequently , since the only invertible polynomials are the non zero constants.   Plane Jacobian conjecture (version 1)  The plane Jacobian conjecture states that if , then the polynomial map has a polynomial inverse. In other words, the Jacobian conjecture states that the necessary condition for the invertibility of , obtained above, is sufficient.   Jacobian pair  A Jacobian pair is a pair , of polynomials , such that .   For a pair of polynomials in two variables with coefficients in , we let and denote the -subalgebra of generated by and the -algebra endomorphism of defined by , respectively.    Let . The following assertions are equivalent:   has a polynomial inverse.  is an automorphism.  .     By definition   Therefore, . Similarly , and so is the inverse of if and only if identities are fulfilled. This proves that items 1 and 2 are equivalent. Clearly, 2 implies 3. It remains to prove that 3 implies 2. But this is true, since 3 says that is surjective, and each surjective algebra endomorphism of is an isomorphism, because is Noetherian.   By , version 1 of the Jacobian conjecture is equivalent to the following ones:   Plane Jacobian conjecture (version 2). If , then is an automorphism of .   Plane Jacobian conjecture (version 3). If , then .   Clearly, for each polynomial in one variable with coefficients in , the maps and are invertible (with inverses and , respectively). These maps are called elementary automorphisms  elementary automorphisms .    Let and . Notice that As , implies that is an automorphism.      Jacobian pair under automorphism. If is a Jacobian pair and , then also is a Jacobian pair.     By the equivalence between items 1 and 2 of and , we know that . Hence, from , we obtain .      Counterexample under automorphism. If is a counterexample to the Jacobian Conjecture and , then also is a counterexample to the Jacobian Conjecture.     By the previous proposition, . Set and , so that . Since and , we have Moreover, again by , we know that has a polynomial inverse. Consequently has a polynomial inverse if and only if does.   From now on we will use without explicit mention.     Small degree cases. Let be a Jacobian pair. If then is an automorphism.     Assume that , which implies . Hence . So, and consequently, there exist and such that and . Then, the polynomials satisfy the conditions , , and ; and consequently, is an automorphism. A similar argument shows that a Jacobian pair with , or defines an automorphism. It remains to prove that if , then is also an automorphism. If or , then , which contradicts the fact that is a Jacobian pair. Thus, necessarily , and so there exist such that , , Moreover, . Let A straightforward computation shows that , , and , and thus is an automorphism.   A technique we will frequently use in these notes is the reduction of the support. Given a pair of polynomials in and a problem involving , the idea is to apply an automorphism of such that:   Solving the problem for implies solving it for ,  the supports of and make the problem easier to solve for these polynomials.   Many times the modification of the support involves a true reduction of the size of the supports of and in some sense (cardinal, area, etc.). For instance, suppose that is invertible and that we want to find . Since an idea is to take an automorphism that reduces the supports of and ; then, an automorphism that reduces the supports of and ; and so on. Let us see how this technique works in a concrete case: take and . We saw in that is invertible. In order to find , we first apply the elementary automorphism , and we obtain and (see ).   Reduction of the support of and by    Then, we apply the elementary automorphism . Clearly and so . By the way, it is also possible to find using and .  Later we will also use the support reduction technique in some extensions of the polynomial ring in two variables.   Exercises    Prove that if is a Noetherian ring, then every surjective endomorphism of is an automorphism.      Prove that if , then there exist and such that .     "
},
{
  "id": "inversa_polinomial",
  "level": "2",
  "url": "sec-1-3.html#inversa_polinomial",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Polynomial inverse.",
  "body": " Polynomial inverse  Let be a polynomial map. We say that f has a polynomial inverse if is invertible and there exist such that .  "
},
{
  "id": "cuando_es_iso_f_P_Q",
  "level": "2",
  "url": "sec-1-3.html#cuando_es_iso_f_P_Q",
  "type": "Remark",
  "number": "1.3.2",
  "title": "",
  "body": " Clearly is inverse of if and only if   "
},
{
  "id": "condicion_necesaria",
  "level": "2",
  "url": "sec-1-3.html#condicion_necesaria",
  "type": "Remark",
  "number": "1.3.3",
  "title": "",
  "body": " If has a polynomial inverse , then, by   and so   Consequently , since the only invertible polynomials are the non zero constants.  "
},
{
  "id": "par_jacobiano",
  "level": "2",
  "url": "sec-1-3.html#par_jacobiano",
  "type": "Definition",
  "number": "1.3.4",
  "title": "Jacobian pair.",
  "body": " Jacobian pair  A Jacobian pair is a pair , of polynomials , such that .  "
},
{
  "id": "equivalencia_de_que_f_PQ_sea_iso",
  "level": "2",
  "url": "sec-1-3.html#equivalencia_de_que_f_PQ_sea_iso",
  "type": "Proposition",
  "number": "1.3.5",
  "title": ".",
  "body": "  Let . The following assertions are equivalent:   has a polynomial inverse.  is an automorphism.  .   "
},
{
  "id": "sec-1-3-16",
  "level": "2",
  "url": "sec-1-3.html#sec-1-3-16",
  "type": "Proof",
  "number": "1.3.1",
  "title": "",
  "body": " By definition   Therefore, . Similarly , and so is the inverse of if and only if identities are fulfilled. This proves that items 1 and 2 are equivalent. Clearly, 2 implies 3. It remains to prove that 3 implies 2. But this is true, since 3 says that is surjective, and each surjective algebra endomorphism of is an isomorphism, because is Noetherian.  "
},
{
  "id": "sec-1-3-18",
  "level": "2",
  "url": "sec-1-3.html#sec-1-3-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Plane Jacobian conjecture (version 2). "
},
{
  "id": "sec-1-3-19",
  "level": "2",
  "url": "sec-1-3.html#sec-1-3-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Plane Jacobian conjecture (version 3). "
},
{
  "id": "automorfismos_elementales",
  "level": "2",
  "url": "sec-1-3.html#automorfismos_elementales",
  "type": "Remark",
  "number": "1.3.6",
  "title": "",
  "body": " Clearly, for each polynomial in one variable with coefficients in , the maps and are invertible (with inverses and , respectively). These maps are called elementary automorphisms  elementary automorphisms .  "
},
{
  "id": "un_ejemplo_de_varphi_inversible",
  "level": "2",
  "url": "sec-1-3.html#un_ejemplo_de_varphi_inversible",
  "type": "Example",
  "number": "1.3.7",
  "title": "",
  "body": " Let and . Notice that As , implies that is an automorphism.  "
},
{
  "id": "P_Q_jac_pair_implica_varphi_P_varphi_Q_jac_pair",
  "level": "2",
  "url": "sec-1-3.html#P_Q_jac_pair_implica_varphi_P_varphi_Q_jac_pair",
  "type": "Proposition",
  "number": "1.3.8",
  "title": "",
  "body": "   Jacobian pair under automorphism. If is a Jacobian pair and , then also is a Jacobian pair.   "
},
{
  "id": "sec-1-3-23",
  "level": "2",
  "url": "sec-1-3.html#sec-1-3-23",
  "type": "Proof",
  "number": "1.3.2",
  "title": "",
  "body": " By the equivalence between items 1 and 2 of and , we know that . Hence, from , we obtain .  "
},
{
  "id": "P_Q_contra_implica_varphi_P_varphi_Q_contra",
  "level": "2",
  "url": "sec-1-3.html#P_Q_contra_implica_varphi_P_varphi_Q_contra",
  "type": "Proposition",
  "number": "1.3.9",
  "title": "",
  "body": "   Counterexample under automorphism. If is a counterexample to the Jacobian Conjecture and , then also is a counterexample to the Jacobian Conjecture.   "
},
{
  "id": "sec-1-3-25",
  "level": "2",
  "url": "sec-1-3.html#sec-1-3-25",
  "type": "Proof",
  "number": "1.3.3",
  "title": "",
  "body": " By the previous proposition, . Set and , so that . Since and , we have Moreover, again by , we know that has a polynomial inverse. Consequently has a polynomial inverse if and only if does.  "
},
{
  "id": "casos_pequenhos",
  "level": "2",
  "url": "sec-1-3.html#casos_pequenhos",
  "type": "Proposition",
  "number": "1.3.10",
  "title": "",
  "body": "   Small degree cases. Let be a Jacobian pair. If then is an automorphism.   "
},
{
  "id": "sec-1-3-28",
  "level": "2",
  "url": "sec-1-3.html#sec-1-3-28",
  "type": "Proof",
  "number": "1.3.4",
  "title": "",
  "body": " Assume that , which implies . Hence . So, and consequently, there exist and such that and . Then, the polynomials satisfy the conditions , , and ; and consequently, is an automorphism. A similar argument shows that a Jacobian pair with , or defines an automorphism. It remains to prove that if , then is also an automorphism. If or , then , which contradicts the fact that is a Jacobian pair. Thus, necessarily , and so there exist such that , , Moreover, . Let A straightforward computation shows that , , and , and thus is an automorphism.  "
},
{
  "id": "fig_10",
  "level": "2",
  "url": "sec-1-3.html#fig_10",
  "type": "Figure",
  "number": "1.3.11",
  "title": "",
  "body": " Reduction of the support of and by   "
},
{
  "id": "ejercicio_1",
  "level": "2",
  "url": "sec-1-3.html#ejercicio_1",
  "type": "Checkpoint",
  "number": "1.3.12",
  "title": "",
  "body": "  Prove that if is a Noetherian ring, then every surjective endomorphism of is an automorphism.   "
},
{
  "id": "ejercicio_2",
  "level": "2",
  "url": "sec-1-3.html#ejercicio_2",
  "type": "Checkpoint",
  "number": "1.3.13",
  "title": "",
  "body": "  Prove that if , then there exist and such that .   "
},
{
  "id": "sec-1-4",
  "level": "1",
  "url": "sec-1-4.html",
  "type": "Section",
  "number": "1.4",
  "title": "Directions, leading terms, starting points and end points",
  "body": " Directions, leading terms, starting points and end points  We denote by the set of all directions  directions in , which by definition is the set of all such that . We also denote by and , the sets of non negative  directions!non negative and positive  directions!positive directions, respectively.     Valuation of a monomial. For all and , we write .       Valuation of a polynomial. Let . For , we define:    The -degree  -degree of as .    The -leading term  -leading term of as .    Note that the usual total degree  total degree of is .     To abbreviate expressions we set and , for all .   In are drawn , and for some directions and The representation of illustrates (1).    Examples of      -homogeneous polynomial. We say that is -homogeneous  -homogeneous if .     Since a polynomial is -homogeneous with if and only if .   For all , each one of the edges of is the convex hull of the support of , where is orthogonal to the given edge and points outside of .   Let and . The following assertions hold:   .   Let . If there exists such that , for all , and , then     If and , then .   .  .   Frequently, we will use these facts throughout the book without explicit mention.      Newton polygon of a product. The identity holds for each .     For each direction , let . By the discussion below , we know that . The opposite inclusion follows from the fact that and by (4).   Let and let . We say that is the -homogeneous decomposition of  -homogeneous decomposition if , for all .   Let and let . We have:    If and are -homogeneous, then is also. Moreover, if , then     If and are the -homogeneous decompositions of and , then the -homogeneous decomposition is given by     If , then .        Valuation of the Jacobian. Let . Then for each . Moreover, and, in this case, .     It follows directly from the decomposition .    Let arbitrary and let . We let and denote the first and the last point that we find on when we run counterclockwise along the boundary of . The identities in can be taken as a formal definition of the starting point  starting point and the end point  end point of . Note that these points coincide if and only if is a monomial.    The identities hold for each and . Moreover, we have as is illustrated in .    The starting and end point of     Let , and let be the automorphism of that interchanges and . A direct computation shows that . From this and equalities it follows that and , where denotes the flip of .   The cross product  cross product of two vectors and in is .   If is not a monomial, then .    Let and . Set and write where with and . Since , by we have       Aligned vectors. For two vectors in any -vector space, we write , if there exists such that . In this case we say that and  are aligned  aligned vectors .     Note that, for , So,     If , then means that , and so is a Jacobian pair.      Extremal points of aligned Jacobian. Let and . If , then      Write and . By identities there exist such that Hence, by (3), Thus, . A similar argument shows that .      Non-aligned extremal points. Let and let be such that The following assertions hold:     if and only if .     if and only if .       We only prove item 1, since item 2 is similar. By replacing , and by , and respectively, we can assume that , and are -homogeneous, and we do it. Let , and . By identity there exist such that Clearly and hence, Consequently, by , if , then which implies that as desired. Conversely, if the last equality holds, then, by the first identity in , and so, again by , which by implies that .      -homogeneous endomorphism. Let be an injective endomorphism of and let . We say that is -homogeneous  -homogeneous injective endomorphism if, for all -homogeneous polynomial ,      By , an injective endomorphism of is -homogeneous if and only if and are -homogeneous, and . From this it follows immediately that is -homogeneous if and only if it is -homogeneous.    For all and , the elementary automorphism is -homogeneous.    Exercises    Prove .      Prove .      Prove .      Prove .     "
},
{
  "id": "sec-1-4-2",
  "level": "2",
  "url": "sec-1-4.html#sec-1-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "directions non negative positive "
},
{
  "id": "definicion_de_v",
  "level": "2",
  "url": "sec-1-4.html#definicion_de_v",
  "type": "Definition",
  "number": "1.4.1",
  "title": "",
  "body": "   Valuation of a monomial. For all and , we write .   "
},
{
  "id": "valuaciones_para_polinomios",
  "level": "2",
  "url": "sec-1-4.html#valuaciones_para_polinomios",
  "type": "Definition",
  "number": "1.4.2",
  "title": "",
  "body": "   Valuation of a polynomial. Let . For , we define:    The -degree  -degree of as .    The -leading term  -leading term of as .    Note that the usual total degree  total degree of is .   "
},
{
  "id": "valuacion_de_cero",
  "level": "2",
  "url": "sec-1-4.html#valuacion_de_cero",
  "type": "Note",
  "number": "1.4.3",
  "title": "",
  "body": " To abbreviate expressions we set and , for all .  "
},
{
  "id": "fig_11",
  "level": "2",
  "url": "sec-1-4.html#fig_11",
  "type": "Figure",
  "number": "1.4.4",
  "title": "",
  "body": "  Examples of  "
},
{
  "id": "elementos_rho_sigma_homogeneos",
  "level": "2",
  "url": "sec-1-4.html#elementos_rho_sigma_homogeneos",
  "type": "Definition",
  "number": "1.4.5",
  "title": "",
  "body": "   -homogeneous polynomial. We say that is -homogeneous  -homogeneous if .   "
},
{
  "id": "euler",
  "level": "2",
  "url": "sec-1-4.html#euler",
  "type": "Remark",
  "number": "1.4.6",
  "title": "",
  "body": " Since a polynomial is -homogeneous with if and only if .  "
},
{
  "id": "pr_v_de_un_producto1",
  "level": "2",
  "url": "sec-1-4.html#pr_v_de_un_producto1",
  "type": "Remark",
  "number": "1.4.7",
  "title": "",
  "body": " Let and . The following assertions hold:   .   Let . If there exists such that , for all , and , then     If and , then .   .  .   Frequently, we will use these facts throughout the book without explicit mention.  "
},
{
  "id": "suma_de_Hs",
  "level": "2",
  "url": "sec-1-4.html#suma_de_Hs",
  "type": "Proposition",
  "number": "1.4.8",
  "title": "",
  "body": "   Newton polygon of a product. The identity holds for each .   "
},
{
  "id": "sec-1-4-13",
  "level": "2",
  "url": "sec-1-4.html#sec-1-4-13",
  "type": "Proof",
  "number": "1.4.1",
  "title": "",
  "body": " For each direction , let . By the discussion below , we know that . The opposite inclusion follows from the fact that and by (4).  "
},
{
  "id": "sec-1-4-14",
  "level": "2",
  "url": "sec-1-4.html#sec-1-4-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-homogeneous decomposition of "
},
{
  "id": "re_v_de_un_conmutador",
  "level": "2",
  "url": "sec-1-4.html#re_v_de_un_conmutador",
  "type": "Remark",
  "number": "1.4.9",
  "title": "",
  "body": " Let and let . We have:    If and are -homogeneous, then is also. Moreover, if , then     If and are the -homogeneous decompositions of and , then the -homogeneous decomposition is given by     If , then .    "
},
{
  "id": "pr_v_de_un_conmutador",
  "level": "2",
  "url": "sec-1-4.html#pr_v_de_un_conmutador",
  "type": "Proposition",
  "number": "1.4.10",
  "title": "",
  "body": "   Valuation of the Jacobian. Let . Then for each . Moreover, and, in this case, .   "
},
{
  "id": "sec-1-4-17",
  "level": "2",
  "url": "sec-1-4.html#sec-1-4-17",
  "type": "Proof",
  "number": "1.4.2",
  "title": "",
  "body": " It follows directly from the decomposition .  "
},
{
  "id": "Comienzo_y_Fin_de_un_elemento_de_W",
  "level": "2",
  "url": "sec-1-4.html#Comienzo_y_Fin_de_un_elemento_de_W",
  "type": "Note",
  "number": "1.4.11",
  "title": "",
  "body": " Let arbitrary and let . We let and denote the first and the last point that we find on when we run counterclockwise along the boundary of . The identities in can be taken as a formal definition of the starting point  starting point and the end point  end point of . Note that these points coincide if and only if is a monomial.  "
},
{
  "id": "st_y_en",
  "level": "2",
  "url": "sec-1-4.html#st_y_en",
  "type": "Remark",
  "number": "1.4.12",
  "title": "",
  "body": " The identities hold for each and . Moreover, we have as is illustrated in .  "
},
{
  "id": "fig_12",
  "level": "2",
  "url": "sec-1-4.html#fig_12",
  "type": "Figure",
  "number": "1.4.13",
  "title": "",
  "body": " The starting and end point of   "
},
{
  "id": "acerca_del_flip",
  "level": "2",
  "url": "sec-1-4.html#acerca_del_flip",
  "type": "Remark",
  "number": "1.4.14",
  "title": "",
  "body": " Let , and let be the automorphism of that interchanges and . A direct computation shows that . From this and equalities it follows that and , where denotes the flip of .  "
},
{
  "id": "sec-1-4-22",
  "level": "2",
  "url": "sec-1-4.html#sec-1-4-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cross product "
},
{
  "id": "starting_and_end_with_cross",
  "level": "2",
  "url": "sec-1-4.html#starting_and_end_with_cross",
  "type": "Remark",
  "number": "1.4.15",
  "title": "",
  "body": " If is not a monomial, then .  "
},
{
  "id": "polinomio_asociado_f",
  "level": "2",
  "url": "sec-1-4.html#polinomio_asociado_f",
  "type": "Remark",
  "number": "1.4.16",
  "title": "",
  "body": " Let and . Set and write where with and . Since , by we have   "
},
{
  "id": "def_vectors_alineados",
  "level": "2",
  "url": "sec-1-4.html#def_vectors_alineados",
  "type": "Definition",
  "number": "1.4.17",
  "title": "",
  "body": "   Aligned vectors. For two vectors in any -vector space, we write , if there exists such that . In this case we say that and  are aligned  aligned vectors .   "
},
{
  "id": "sec-1-4-26",
  "level": "2",
  "url": "sec-1-4.html#sec-1-4-26",
  "type": "Remark",
  "number": "1.4.18",
  "title": "",
  "body": " Note that, for , So,   "
},
{
  "id": "Jacobian_pair_como_alineados",
  "level": "2",
  "url": "sec-1-4.html#Jacobian_pair_como_alineados",
  "type": "Remark",
  "number": "1.4.19",
  "title": "",
  "body": " If , then means that , and so is a Jacobian pair.  "
},
{
  "id": "extremos_alineados",
  "level": "2",
  "url": "sec-1-4.html#extremos_alineados",
  "type": "Proposition",
  "number": "1.4.20",
  "title": "",
  "body": "   Extremal points of aligned Jacobian. Let and . If , then    "
},
{
  "id": "sec-1-4-29",
  "level": "2",
  "url": "sec-1-4.html#sec-1-4-29",
  "type": "Proof",
  "number": "1.4.3",
  "title": "",
  "body": " Write and . By identities there exist such that Hence, by (3), Thus, . A similar argument shows that .  "
},
{
  "id": "extremos_no_alineados",
  "level": "2",
  "url": "sec-1-4.html#extremos_no_alineados",
  "type": "Proposition",
  "number": "1.4.21",
  "title": "",
  "body": "   Non-aligned extremal points. Let and let be such that The following assertions hold:     if and only if .     if and only if .     "
},
{
  "id": "sec-1-4-31",
  "level": "2",
  "url": "sec-1-4.html#sec-1-4-31",
  "type": "Proof",
  "number": "1.4.4",
  "title": "",
  "body": " We only prove item 1, since item 2 is similar. By replacing , and by , and respectively, we can assume that , and are -homogeneous, and we do it. Let , and . By identity there exist such that Clearly and hence, Consequently, by , if , then which implies that as desired. Conversely, if the last equality holds, then, by the first identity in , and so, again by , which by implies that .  "
},
{
  "id": "homogeneous_endomorphism",
  "level": "2",
  "url": "sec-1-4.html#homogeneous_endomorphism",
  "type": "Definition",
  "number": "1.4.22",
  "title": "",
  "body": "   -homogeneous endomorphism. Let be an injective endomorphism of and let . We say that is -homogeneous  -homogeneous injective endomorphism if, for all -homogeneous polynomial ,    "
},
{
  "id": "sec-1-4-33",
  "level": "2",
  "url": "sec-1-4.html#sec-1-4-33",
  "type": "Remark",
  "number": "1.4.23",
  "title": "",
  "body": " By , an injective endomorphism of is -homogeneous if and only if and are -homogeneous, and . From this it follows immediately that is -homogeneous if and only if it is -homogeneous.  "
},
{
  "id": "ejemplo_de_auto_homo",
  "level": "2",
  "url": "sec-1-4.html#ejemplo_de_auto_homo",
  "type": "Example",
  "number": "1.4.24",
  "title": "",
  "body": " For all and , the elementary automorphism is -homogeneous.  "
},
{
  "id": "ejercicio_pr_v_de_un_producto1",
  "level": "2",
  "url": "sec-1-4.html#ejercicio_pr_v_de_un_producto1",
  "type": "Checkpoint",
  "number": "1.4.25",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "ejercicio_re_v_de_un_conmutador",
  "level": "2",
  "url": "sec-1-4.html#ejercicio_re_v_de_un_conmutador",
  "type": "Checkpoint",
  "number": "1.4.26",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "ejercicio_st_y_en",
  "level": "2",
  "url": "sec-1-4.html#ejercicio_st_y_en",
  "type": "Checkpoint",
  "number": "1.4.27",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "ejercicio_starting_and_end_with_cross",
  "level": "2",
  "url": "sec-1-4.html#ejercicio_starting_and_end_with_cross",
  "type": "Checkpoint",
  "number": "1.4.28",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "sec-1-5",
  "level": "1",
  "url": "sec-1-5.html",
  "type": "Section",
  "number": "1.5",
  "title": "The element F",
  "body": " The element F     Homogeneous Jacobian pair. Let and let be two -homogeneous elements. Set and .    If , then .    Assume that and let coprime such that . If , then , we can take and the following facts hold:    There exists such that .    There exists a -homogeneous polynomial , such that and .          1. For , set . Since and are -homogeneous and , there exists , such that . So , where . From this and (1) it follows that .   2. To prove that , we can assume that and , which implies that and . By , we know that . So, there exists such that . Since both, and are in , necessarily . Therefore, and we can take .   2a) By , we have Consequently . Thus, and similarly, . Hence, , from which follows.   2b) Set , and . Since and are -homogeneous and , it follows from , that for some such that and . By statement 2a), there exists such that which implies Since , by the second equality there exists such that Take such that and define , where . Since, by the first identity in , from and , it follows that and .    A polynomial is said to be not a proper power  polynomial that is not a proper power if implies . For every polynomial , there exists a polynomial , which is not a proper power, and a natural number such that . Furthermore, if for some , then ; and the following conditions are equivalent:   is not a proper power,  ,  ,   is the largest integer for which there exists such that .   Clearly, in (2b) we can take not a proper power, but then we lose the property that .      Joseph's Lemma. Let and let be a Jacobian pair. If , then there exists such that Moreover, if we define recursively , then , for .     For , set Since is linearly independent (by ), we have On the other hand, by items 4 and 5 of , we know that where and In other words, For each , we take a with . We next prove that, for some sufficiently large, there exists such that Assume by contradiction that We claim that then In fact, suppose this equality is false for some , and choose such that the number is minimum. By assumption, Since , by (2b) and , there exist , and a polynomial , which is not a proper power, such that But, since and , by (4), we have . Hence, which contradicts the choice of and thus proves , finishing the proof of the claim. But implies , for all , which contradicts if we take . Thus, we can find such that is satisfied. We now define recursively , by setting Since and , from it follows that eventually . Let be the largest index for which . By (3), we know that . But we also have and so there exists a largest such that . Hence, by , we have . Thus and so satisfies the required conditions.      Existence of F_0. Let , let be a Jacobian pair and let be a polynomial such that with as large as possible. If , then there exists and a -homogeneous element such that .     Let be as in and set and . Since and by , we have and . Thus, since , we can apply (2b), and we obtain that and , for some and some -homogeneous element . Note that because . But, since is maximal, we must have , and so . Hence , as desired.      Centralizer computation. Let and let be -homogeneous elements. Assume that and that there exists such that Define , and write Then   .  Every irreducible factor of divides .  If is a constant (i.e., is a monomial), then is also a constant (i.e., is a monomial).  If , then , for some and .         Since and are -homogeneous, by (1) and (4) we have which yields item 1. By , and , we obtain that On the other hand, by we have Hence and so, by we have Inserting these values into , we obtain which is item 5. Let be an irreducible factor of and let and be the multiplicity of in and , respectively. Note that , since . We claim that . In fact, since , by item 1 we have . Consequently, if , then computing the multiplicity of in each side of , we obtain that , which is impossible. This proves item 2. Items 3 and 4 follow directly from item 2, which concludes the proof.      Centralizer theorem. Let and let be a Jacobian pair. If , then there exists a -homogeneous element such that Moreover   ,    if and only if ,     if and only if ,     and ,       Let be such that with as large as possible. Clearly is -homogeneous. Moreover, by , there exist a -homogeneous element and such that . We can and will assume that Note that and that, by (1) and (4), Hence . Next, we will prove that there exists a -homogeneous element such that If , we can take . So, we can assume that . In this case, we will prove that there exists a -homogeneous element such that This will finish the proof of , because it implies that and, since is a domain, we obtain . Set and write By (5), we have Let be an irreducible factor of and let and be the multiplicity of in and , respectively. By (2) we know that . Next we will prove that . For this, we write and . Then and so yields The multiplicity of on the left hand side is . If , then the multiplicity of on the right hand side is , and so , which implies , as desired. If , then, using item 1 of and that , we obtain Since , this implies that , also in this case. Since this is true for each irreducible factor of , there exists , such that . But then and so satisfies . We claim that . Write with . Since in order to prove the claim, we must show that Clearly, for this will be sufficient to prove the cases and . We first show that and . If , then, by equality , (1) and , we have Since, by and we know that and , this equation is equivalent to Consequently, as desired. On the other hand, if , then and so, Moreover, by , we have , which combined with and (1), gives Hence and , as desired. We now prove that Let and . By , and the fact that , we have Hence If , then, by equality , (2) and , we have where, for the equivalence, we use . Thus as desired. On the other hand, if , then and so, again by , Moreover, by , we have , which combined with and (1), gives Since , this implies that as desired. This finishes the proof of , and concludes the proof of . But then and so is true. Finally we prove the additional statements. By (1), which is statement 1. Statements 2 and 3 follow from . In order to prove statement 4, we assume by contradiction that . By statement 2, necessarily and so, again by statement 2, we have . Since and (because and ), Hence, there exists such that . But then , because So , which contradicts and proves that . By a similar argument we obtain , which concludes the proof of item 4 and of the theorem.    Assume that , and are as in . Since we know that . Hence, items 2 and 3 of are equivalent to and respectively.    Exercises    Let be a rational function. Use that is naturally included in the field of Laurent series, in order to prove that if , then .      Prove equality .       Let and . Verify that and find with .     Hint for     "
},
{
  "id": "P_y_Q_alineados",
  "level": "2",
  "url": "sec-1-5.html#P_y_Q_alineados",
  "type": "Proposition",
  "number": "1.5.1",
  "title": "",
  "body": "   Homogeneous Jacobian pair. Let and let be two -homogeneous elements. Set and .    If , then .    Assume that and let coprime such that . If , then , we can take and the following facts hold:    There exists such that .    There exists a -homogeneous polynomial , such that and .       "
},
{
  "id": "sec-1-5-3",
  "level": "2",
  "url": "sec-1-5.html#sec-1-5-3",
  "type": "Proof",
  "number": "1.5.1",
  "title": "",
  "body": "  1. For , set . Since and are -homogeneous and , there exists , such that . So , where . From this and (1) it follows that .   2. To prove that , we can assume that and , which implies that and . By , we know that . So, there exists such that . Since both, and are in , necessarily . Therefore, and we can take .   2a) By , we have Consequently . Thus, and similarly, . Hence, , from which follows.   2b) Set , and . Since and are -homogeneous and , it follows from , that for some such that and . By statement 2a), there exists such that which implies Since , by the second equality there exists such that Take such that and define , where . Since, by the first identity in , from and , it follows that and .  "
},
{
  "id": "R_reducido",
  "level": "2",
  "url": "sec-1-5.html#R_reducido",
  "type": "Remark",
  "number": "1.5.2",
  "title": "",
  "body": " A polynomial is said to be not a proper power  polynomial that is not a proper power if implies . For every polynomial , there exists a polynomial , which is not a proper power, and a natural number such that . Furthermore, if for some , then ; and the following conditions are equivalent:   is not a proper power,  ,  ,   is the largest integer for which there exists such that .   Clearly, in (2b) we can take not a proper power, but then we lose the property that .  "
},
{
  "id": "Lema_Joseph",
  "level": "2",
  "url": "sec-1-5.html#Lema_Joseph",
  "type": "Lemma",
  "number": "1.5.3",
  "title": "",
  "body": "   Joseph's Lemma. Let and let be a Jacobian pair. If , then there exists such that Moreover, if we define recursively , then , for .   "
},
{
  "id": "sec-1-5-6",
  "level": "2",
  "url": "sec-1-5.html#sec-1-5-6",
  "type": "Proof",
  "number": "1.5.2",
  "title": "",
  "body": " For , set Since is linearly independent (by ), we have On the other hand, by items 4 and 5 of , we know that where and In other words, For each , we take a with . We next prove that, for some sufficiently large, there exists such that Assume by contradiction that We claim that then In fact, suppose this equality is false for some , and choose such that the number is minimum. By assumption, Since , by (2b) and , there exist , and a polynomial , which is not a proper power, such that But, since and , by (4), we have . Hence, which contradicts the choice of and thus proves , finishing the proof of the claim. But implies , for all , which contradicts if we take . Thus, we can find such that is satisfied. We now define recursively , by setting Since and , from it follows that eventually . Let be the largest index for which . By (3), we know that . But we also have and so there exists a largest such that . Hence, by , we have . Thus and so satisfies the required conditions.  "
},
{
  "id": "prop_F0",
  "level": "2",
  "url": "sec-1-5.html#prop_F0",
  "type": "Proposition",
  "number": "1.5.4",
  "title": "",
  "body": "   Existence of F_0. Let , let be a Jacobian pair and let be a polynomial such that with as large as possible. If , then there exists and a -homogeneous element such that .   "
},
{
  "id": "sec-1-5-8",
  "level": "2",
  "url": "sec-1-5.html#sec-1-5-8",
  "type": "Proof",
  "number": "1.5.3",
  "title": "",
  "body": " Let be as in and set and . Since and by , we have and . Thus, since , we can apply (2b), and we obtain that and , for some and some -homogeneous element . Note that because . But, since is maximal, we must have , and so . Hence , as desired.  "
},
{
  "id": "central_2",
  "level": "2",
  "url": "sec-1-5.html#central_2",
  "type": "Proposition",
  "number": "1.5.5",
  "title": "",
  "body": "   Centralizer computation. Let and let be -homogeneous elements. Assume that and that there exists such that Define , and write Then   .  Every irreducible factor of divides .  If is a constant (i.e., is a monomial), then is also a constant (i.e., is a monomial).  If , then , for some and .       "
},
{
  "id": "sec-1-5-10",
  "level": "2",
  "url": "sec-1-5.html#sec-1-5-10",
  "type": "Proof",
  "number": "1.5.4",
  "title": "",
  "body": " Since and are -homogeneous, by (1) and (4) we have which yields item 1. By , and , we obtain that On the other hand, by we have Hence and so, by we have Inserting these values into , we obtain which is item 5. Let be an irreducible factor of and let and be the multiplicity of in and , respectively. Note that , since . We claim that . In fact, since , by item 1 we have . Consequently, if , then computing the multiplicity of in each side of , we obtain that , which is impossible. This proves item 2. Items 3 and 4 follow directly from item 2, which concludes the proof.  "
},
{
  "id": "central",
  "level": "2",
  "url": "sec-1-5.html#central",
  "type": "Theorem",
  "number": "1.5.6",
  "title": "",
  "body": "   Centralizer theorem. Let and let be a Jacobian pair. If , then there exists a -homogeneous element such that Moreover   ,    if and only if ,     if and only if ,     and ,     "
},
{
  "id": "sec-1-5-12",
  "level": "2",
  "url": "sec-1-5.html#sec-1-5-12",
  "type": "Proof",
  "number": "1.5.5",
  "title": "",
  "body": " Let be such that with as large as possible. Clearly is -homogeneous. Moreover, by , there exist a -homogeneous element and such that . We can and will assume that Note that and that, by (1) and (4), Hence . Next, we will prove that there exists a -homogeneous element such that If , we can take . So, we can assume that . In this case, we will prove that there exists a -homogeneous element such that This will finish the proof of , because it implies that and, since is a domain, we obtain . Set and write By (5), we have Let be an irreducible factor of and let and be the multiplicity of in and , respectively. By (2) we know that . Next we will prove that . For this, we write and . Then and so yields The multiplicity of on the left hand side is . If , then the multiplicity of on the right hand side is , and so , which implies , as desired. If , then, using item 1 of and that , we obtain Since , this implies that , also in this case. Since this is true for each irreducible factor of , there exists , such that . But then and so satisfies . We claim that . Write with . Since in order to prove the claim, we must show that Clearly, for this will be sufficient to prove the cases and . We first show that and . If , then, by equality , (1) and , we have Since, by and we know that and , this equation is equivalent to Consequently, as desired. On the other hand, if , then and so, Moreover, by , we have , which combined with and (1), gives Hence and , as desired. We now prove that Let and . By , and the fact that , we have Hence If , then, by equality , (2) and , we have where, for the equivalence, we use . Thus as desired. On the other hand, if , then and so, again by , Moreover, by , we have , which combined with and (1), gives Since , this implies that as desired. This finishes the proof of , and concludes the proof of . But then and so is true. Finally we prove the additional statements. By (1), which is statement 1. Statements 2 and 3 follow from . In order to prove statement 4, we assume by contradiction that . By statement 2, necessarily and so, again by statement 2, we have . Since and (because and ), Hence, there exists such that . But then , because So , which contradicts and proves that . By a similar argument we obtain , which concludes the proof of item 4 and of the theorem.  "
},
{
  "id": "sobre_central",
  "level": "2",
  "url": "sec-1-5.html#sobre_central",
  "type": "Remark",
  "number": "1.5.7",
  "title": "",
  "body": " Assume that , and are as in . Since we know that . Hence, items 2 and 3 of are equivalent to and respectively.  "
},
{
  "id": "ejercicio_5_1",
  "level": "2",
  "url": "sec-1-5.html#ejercicio_5_1",
  "type": "Checkpoint",
  "number": "1.5.8",
  "title": "",
  "body": "  Let be a rational function. Use that is naturally included in the field of Laurent series, in order to prove that if , then .   "
},
{
  "id": "ejercicio_5_5",
  "level": "2",
  "url": "sec-1-5.html#ejercicio_5_5",
  "type": "Checkpoint",
  "number": "1.5.9",
  "title": "",
  "body": "  Prove equality .   "
},
{
  "id": "ejercicio_5_2",
  "level": "2",
  "url": "sec-1-5.html#ejercicio_5_2",
  "type": "Checkpoint",
  "number": "1.5.10",
  "title": "",
  "body": "  Let and . Verify that and find with .   "
},
{
  "id": "fig_13",
  "level": "2",
  "url": "sec-1-5.html#fig_13",
  "type": "Figure",
  "number": "1.5.11",
  "title": "",
  "body": " Hint for   "
},
{
  "id": "sec-1-6",
  "level": "1",
  "url": "sec-1-6.html",
  "type": "Section",
  "number": "1.6",
  "title": "Order on directions and shaping the support",
  "body": " Order on directions and shaping the support    We assign to each direction its corresponding unit vector in (that is ), and we define an interval in  interval in as the preimage under this map of an arc of that is not the whole circle. We consider each interval endowed with the order that increases counterclockwise. For example, given , we let denote the preimage of the arc from to in the counterclockwise direction, that contains both endpoints. This interval is the set where the order is the one mentioned above. In a similar way we can define the open and semiopen intervals , and .      Let . We define the set of directions of  directions of a polynomial , as      An example of      Let which is not a monomial and . We define the successor  successor  of to be the first element of that one encounters starting from and running counterclockwise, and the predecessor  predecessor  , to be the first one, if we run clockwise.     Note that if is a monomial, then and that if is -homogeneous, but is not a monomial, then . In this case Furthermore, if is not homogeneous, then any two consecutive directions of are separated by less than , and so .    Let and let and be two consecutive directions of . For any direction with , we have     If is an interval in , smaller than a closed half circle, which means there is no with , then, for , we have      For and , consider the automorphism of defined by and , and set . For all and each direction such that , we have Moreover , and so .     Illustration of     Since is -homogeneous (see ), for all , we have We next prove that . To begin note that, by , and so . Consequently, , which implies that where we use (1). We claim that In fact, let be a -homogeneous polynomial. Write , where the sum runs on the support of . By , Since, moreover, , by (2), we obtain . Now write Since, by  using again and (3), we obtain as desired. Now, since , it follows from the first and last equality in , that Thus, by the second equality in , we have , which concludes the proof.     For and , consider the automorphism , defined by and , and set . For all and each direction such that , we have Moreover , and so .     Let , where is as in . It is clear that and . Hence we can apply the previous proposition in order to obtain for all . Using , we obtain and that . For example We leave the remaining equalities as an exercise for the reader.    Let be an automorphism of . To streamline the exposition from this point onward, we will occasionally refer to the expression more informally. Instead of writing it explicitly each time, we may say that we apply to or we transform by . Furthermore, when the context is clear and no ambiguity arises, we may continue to denote the transformed polynomial simply as . This convention will be adopted throughout the remainder of the text.    When we apply of , we will sometimes say that  cuts , extends or erases the edge , or creates the edge . This has a precise meaning that we will explain. Write   Assume that . Since is algebraically closed, Note that, by the first equality in and the fact that , and Note also that and implies (we can extend in a unique way to an automorphism of , which contains ), and so We consider the following cases:    and , for some with . By equality applied to , we have Since , we say that  cuts the edge . cuts the edge   In , we illustrate this case with Thus We take (so and ). A direct computation, using that , gives and so and .   Case a     b)  , and or for some with . By equality applied to , we have Since , we say that extends the edge . extends the edge   In , we illustrate this case with Thus We take (so and ). A direct computation, using that , gives and so and .   Case b     c)  , and . By equalities and applied to , we have Hence erases the edge . erases the edge   In , we illustrate this case with Thus . We take (so and ). A direct computation, using that , gives and so and .   Case c     d)  , and . By equalities and applied to , we have Since is a monomial, we say that creates the edge . creates the edge   In , we illustrate this case with Thus , where . We take (so and ). A direct computation, using that , gives and so and .   Case d     "
},
{
  "id": "intervalos_en_direcciones",
  "level": "2",
  "url": "sec-1-6.html#intervalos_en_direcciones",
  "type": "Definition",
  "number": "1.6.1",
  "title": "",
  "body": "  We assign to each direction its corresponding unit vector in (that is ), and we define an interval in  interval in as the preimage under this map of an arc of that is not the whole circle. We consider each interval endowed with the order that increases counterclockwise. For example, given , we let denote the preimage of the arc from to in the counterclockwise direction, that contains both endpoints. This interval is the set where the order is the one mentioned above. In a similar way we can define the open and semiopen intervals , and .   "
},
{
  "id": "forma_debil",
  "level": "2",
  "url": "sec-1-6.html#forma_debil",
  "type": "Definition",
  "number": "1.6.2",
  "title": "",
  "body": "  Let . We define the set of directions of  directions of a polynomial , as    "
},
{
  "id": "fig_14",
  "level": "2",
  "url": "sec-1-6.html#fig_14",
  "type": "Figure",
  "number": "1.6.3",
  "title": "",
  "body": " An example of   "
},
{
  "id": "Sucesor_y_predecesor",
  "level": "2",
  "url": "sec-1-6.html#Sucesor_y_predecesor",
  "type": "Definition",
  "number": "1.6.4",
  "title": "",
  "body": "  Let which is not a monomial and . We define the successor  successor  of to be the first element of that one encounters starting from and running counterclockwise, and the predecessor  predecessor  , to be the first one, if we run clockwise.   "
},
{
  "id": "a_180_grados",
  "level": "2",
  "url": "sec-1-6.html#a_180_grados",
  "type": "Remark",
  "number": "1.6.5",
  "title": "",
  "body": " Note that if is a monomial, then and that if is -homogeneous, but is not a monomial, then . In this case Furthermore, if is not homogeneous, then any two consecutive directions of are separated by less than , and so .  "
},
{
  "id": "direcciones_consecutivas",
  "level": "2",
  "url": "sec-1-6.html#direcciones_consecutivas",
  "type": "Remark",
  "number": "1.6.6",
  "title": "",
  "body": " Let and let and be two consecutive directions of . For any direction with , we have   "
},
{
  "id": "direcciones_consecutivas_prime",
  "level": "2",
  "url": "sec-1-6.html#direcciones_consecutivas_prime",
  "type": "Remark",
  "number": "1.6.7",
  "title": "",
  "body": " If is an interval in , smaller than a closed half circle, which means there is no with , then, for , we have   "
},
{
  "id": "pr_ell_por_automorfismos",
  "level": "2",
  "url": "sec-1-6.html#pr_ell_por_automorfismos",
  "type": "Proposition",
  "number": "1.6.8",
  "title": "",
  "body": "  For and , consider the automorphism of defined by and , and set . For all and each direction such that , we have Moreover , and so .   "
},
{
  "id": "fig_15",
  "level": "2",
  "url": "sec-1-6.html#fig_15",
  "type": "Figure",
  "number": "1.6.9",
  "title": "",
  "body": " Illustration of   "
},
{
  "id": "sec-1-6-11",
  "level": "2",
  "url": "sec-1-6.html#sec-1-6-11",
  "type": "Proof",
  "number": "1.6.1",
  "title": "",
  "body": " Since is -homogeneous (see ), for all , we have We next prove that . To begin note that, by , and so . Consequently, , which implies that where we use (1). We claim that In fact, let be a -homogeneous polynomial. Write , where the sum runs on the support of . By , Since, moreover, , by (2), we obtain . Now write Since, by  using again and (3), we obtain as desired. Now, since , it follows from the first and last equality in , that Thus, by the second equality in , we have , which concludes the proof.  "
},
{
  "id": "de_pr_ell_por_automorfismos",
  "level": "2",
  "url": "sec-1-6.html#de_pr_ell_por_automorfismos",
  "type": "Corollary",
  "number": "1.6.10",
  "title": "",
  "body": "  For and , consider the automorphism , defined by and , and set . For all and each direction such that , we have Moreover , and so .   "
},
{
  "id": "sec-1-6-13",
  "level": "2",
  "url": "sec-1-6.html#sec-1-6-13",
  "type": "Proof",
  "number": "1.6.2",
  "title": "",
  "body": " Let , where is as in . It is clear that and . Hence we can apply the previous proposition in order to obtain for all . Using , we obtain and that . For example We leave the remaining equalities as an exercise for the reader.  "
},
{
  "id": "convencion_automorfismos",
  "level": "2",
  "url": "sec-1-6.html#convencion_automorfismos",
  "type": "Remark",
  "number": "1.6.11",
  "title": "",
  "body": " Let be an automorphism of . To streamline the exposition from this point onward, we will occasionally refer to the expression more informally. Instead of writing it explicitly each time, we may say that we apply to or we transform by . Furthermore, when the context is clear and no ambiguity arises, we may continue to denote the transformed polynomial simply as . This convention will be adopted throughout the remainder of the text.  "
},
{
  "id": "casos_shaping",
  "level": "2",
  "url": "sec-1-6.html#casos_shaping",
  "type": "Remark",
  "number": "1.6.12",
  "title": "",
  "body": " When we apply of , we will sometimes say that  cuts , extends or erases the edge , or creates the edge . This has a precise meaning that we will explain. Write   Assume that . Since is algebraically closed, Note that, by the first equality in and the fact that , and Note also that and implies (we can extend in a unique way to an automorphism of , which contains ), and so We consider the following cases:    and , for some with . By equality applied to , we have Since , we say that  cuts the edge . cuts the edge   In , we illustrate this case with Thus We take (so and ). A direct computation, using that , gives and so and .   Case a     b)  , and or for some with . By equality applied to , we have Since , we say that extends the edge . extends the edge   In , we illustrate this case with Thus We take (so and ). A direct computation, using that , gives and so and .   Case b     c)  , and . By equalities and applied to , we have Hence erases the edge . erases the edge   In , we illustrate this case with Thus . We take (so and ). A direct computation, using that , gives and so and .   Case c     d)  , and . By equalities and applied to , we have Since is a monomial, we say that creates the edge . creates the edge   In , we illustrate this case with Thus , where . We take (so and ). A direct computation, using that , gives and so and .   Case d    "
},
{
  "id": "sec-1-7",
  "level": "1",
  "url": "sec-1-7.html",
  "type": "Section",
  "number": "1.7",
  "title": "The shape of counterexamples and (m,n)-pairs",
  "body": " The shape of counterexamples and (m,n)-pairs  We will see that a (hypothetical) counterexample to the plane Jacobian conjecture can be transformed into a standard counterexample (see ).   By equality , one can readily verify that if is a Jacobian pair and is a monomial, then necessarily or . Consequently, by and version 2 of the Plane Jacobian conjecture, if is a counterexample to the Jacobian conjecture, then neither nor can be a monomial.   From now on the previous remark will be used without explicit mention.    Let be coprime with . A pair , of elements in , is called an -pair in  -pair in , if An -pair is called a standard -pair in  standard -pair in if .     If is a Jacobian pair, then or . In fact, by , we have Assume by contradiction that and . Then and becomes an equality. Hence, on one hand, by , we have ; while, on the other hand, from , it follows that , for , which leads to the contradiction .    Note that if , and with , then      Assume the Jacobian conjecture is false and let be a counterexample to it. If or , then there is a counterexample with      Assume for example that and write . By , we know that . Hence Then, by , we have . Since, moreover , by (2b), there exist and a -homogeneous polynomial , such that Hence and , for some . It follows that satisfies the inequality . Moreover, it is clear that and . Hence, by version 3 of the Jacobian conjecture, is also a counterexample. Now, we can construct successively , such that are counterexamples and , until does not divide . Then and so and satisfy the required conditions. When a similar argument gives the proof.     A counterexample , without divisibility relations of degrees or simply a counterexample , without divisibility  counterexample , without divisibility , is a counterexample to the Jacobian conjecture, such that and .      Assume that the Jacobian conjecture is false, let be a counterexample to it and let . Assume that there exist coprime , such that Then   ,  ,  ,  if and only if ,  .      To begin with note that is contained in a half circle, and so, by  and We next prove items 1--5 separately.   1. By equality , we have    2. Assume by contradiction that this is false. Then, by item 1, we have and . Hence, by , necessarily . Consequently , and so, by  which is impossible, since . This concludes the proof of item 2.   3. By , we must prove that We first assume that , and we consider the three cases:  a) ,  b) ,  c) .  In the case a), from we obtain directly as desired. In the case b), we note that, again by , we know that , and so there is a with . But then, since , we have and by the same argument . Hence, as desired. The case c) is similar (use that ).  Assume now that . We first note that there exists with . In fact, otherwise and , which is impossible by . If , then by , we have Combining this with item 2, we obtain that as desired. In the case , the same argument works.   4. and 5. By items 2 and 3, and by (2b), there exist coprime , and a -homogeneous polynomial , such that Clearly is a monomial if and only if is a monomial, and this happens if and only if is a monomial, which proves item 4. Now, by we have Consequently, , and so, and , by . Finally, the same remark yields which finishes the proof of item 5.     If is a counterexample to the plane Jacobian conjecture, then there exist coprime such that, for all , we have   ,  and ,  ,   and ,   .      Set and write We first consider the case . By , we have , which implies and . Hence, and so, by , we know that . Thus items 2 and 3 are satisfied, and so, by (2b), there exist coprime , and a -homogeneous polynomial such that Then, by , we have which yields . Similarly , which finishes the proof of item 4, for . Moreover, we also have which proves item 1 in this case. Assume inductively that and that items 1--4 hold for the direction . Then and yields items 1--4, for . Hence items 1--4 hold for all . Moreover, item 4 of guarantees that proving item 5. Finally take , and notice that for some , we have and, again by , we obtain items 1--4, for , concluding the proof.    Illustration of      Let be a Jacobian pair in , let and let be as in . Then the following cases arise:    If , then .    If , then for some , and .    If , then for some , and .    Moreover, if and if we write , where and , then has exactly one linear factor (which is different from , since , by ).     Note that if and only if , and if and only if is not a monomial. By (3) the -homogeneous polynomial is not a monomial, and will find the line containing . Since , we know that is the straight line going through with slope (see ). If , then clearly proving item 1. If , then the slope is in and intersects in more than one point only if , for some . In this case and then has degree , and . Finally, if , then the slope is in and intersects in more than one point only if , for some . In this case and then has degree , and .    Lines through that intersect in more than one point     Assume that is a Jacobian pair and let be the -homogeneous polynomial given in . Write where and are polynomials such that and . By (1), , and so by , the polynomial has at most two distinct linear factors.    If has zero linear factors, i.e., if is a constant, then is a monomial with support equal to , and we have the following three possibilities, which are illustrated in :   a) and ,  b) and ,  c) and .     If is a power of a linear factor, then has at least one linear factor, and so or . Since, by , we know that if and if , we have three possibilities, which are illustrated in :   a) and ,  b) and ,  c) and .     If has two different linear factors, then has also two different linear factors, and hence . Again by , necessarily and . This is also illustrated in .      Case 1     Case 2 and Case 3      Assume the Jacobian conjecture is false and let be a counterexample to it. Assume that and do not divide each other and that we are in one of the cases 1b), 1c) or 2a) of . Then there exists an automorphism of such that Consequently, .     If we are in the case 2a), then and so, by or (1), we are in the case c) of and we can erase the edge . By this and , we arrive at case 1b) without changing nor . Now, if we are in the case 1b), then we can apply the automorphism which exchanges and , and we arrive at case 1c) without changing nor . Thus, we can assume that we are in the case 1c). Then, by , So, by (2), we have , for some . Moreover, by (2), we know that . Let be as in and write where and are polynomials such that and . Again by , we also know that , for some , and so, using , we obtain that , for some . Moreover, since and we are in the case 1c), we know that . Hence We define by setting and , and set and . By  Hence, for each we have which, combined with the fact that , gives Since , the equality is only possible if and . But it is impossible that . In fact, since , if , then , which is false because . Consequently, , which is the second condition in . The first condition follows from the series of equalities where the first and the third one are true by (1); and the second one, by .     We will say that is subrectangular  subrectangular polynomial if there exists such that In this case we also will say that is subrectangular  subrectangular support . Finally, we will say that a pair is subrectangular if and are. subrectangular pair of polynomials     Note that is subrectangular if and only if , and either is a monomial or .    A counterexample to the Jacobian conjecture is called a standard counterexample  standard counterexample if and there exists such that is a standard -pair.     The pair in the previous definition is unique and coincides with the pair in .     For each counterexample such that and do not divide each other, there exists an automorphism of such that is a subrectangular counterexample to the Jacobian Conjecture, which is a standard -pair, for some . Moreover      By , applying an automorphism of if necessary, we can assume that we are not in any of the cases 1b), 1c) or 2a) of . Now, we will modify and without changing their degrees, either by using or by applying . Hence condition will be satisfied. If we are in case 3), then where for the last equality we have used (2). Applying the automorphism of , defined by and , we arrive at case 2c). If we are in case 2c), then we apply the automorphism which exchanges and , and we arrive at case 2b). In case 2b) we can erase the edge (see c)) and arrive at case 1a). Thus, we can and will assume that we are in case 1a), and so we have where we have used (5). If necessary, we apply to ensure that . Since (4) guarantees that , we conclude that . We claim that In fact, to justify the first inequality, suppose for contradiction that and let be as in . By (2) we know that with . Consequently and thus, by , we obtain This leads to a contradiction, and thus we conclude that , as claimed. Similarly one shows that . Consequently which implies that both and are subrectangular. Hence, where the last inequality follows from the fact that . Moreover, since and do not divide each other, it follows that , and therefore is an -pair. Let be as in corresponding to the direction . Since , we may write , where is a monic polynomial. Moreover, following , we write where are pairwise distinct, , and . If , then is a monomial. In this case we have , and therefore is a standard -pair. If and , then, as noted in (c), the edge can be erased. In this case, becomes a monomial, which implies that , and therefore becomes a standard -pair. Consequently, we can assume that , or and . We claim that where . By (2), to prove this bound it suffices to show that if , then . Assume for contradiction, that and . Then , and by , we would have which leads to a contradiction. Now observe that the bound in implies . Consequently, . Therefore, by , we have and thus . But then for some index we have ; otherwise, by we would derive the contradiction Let be the automorphism of defined by and . By , we have and therefore, by , it follows that . Now observe that is impossible; otherwise we would have , contradicting (4). Hence, which shows that is a standard -pair.    Factors of      For each counterexample such that and do not divide each other, there exists an automorphism of such that is a standard counterexample to the Jacobian Conjecture,      By , applying an automorphism of if necessary, we can assume that is a subrectangular counterexample to the Jacobian Conjecture, which is a standard -pair, for some . Write . If , then there is nothing to prove. Suppose instead that . By (2), we know that . Let be the -homogeneous polynomial provided by . Since , it follows that . We assert that . Indeed, if , then by , it must be that , which leads to a contradiction, as and . Since , (3) ensures that is not a monomial. Hence, by , we obtain and with . Consequently, by (4), we conclude that According to , this implies that . On the other hand, applying once again, we deduce that , and therefore . Let be the automorphism of , defined by and . By  for each . From this it follows that , that is a standard -pair and that is satisfied.    Exercises    Prove the last assertion in .     "
},
{
  "id": "remark_monomial_counterexample",
  "level": "2",
  "url": "sec-1-7.html#remark_monomial_counterexample",
  "type": "Remark",
  "number": "1.7.1",
  "title": "",
  "body": " By equality , one can readily verify that if is a Jacobian pair and is a monomial, then necessarily or . Consequently, by and version 2 of the Plane Jacobian conjecture, if is a counterexample to the Jacobian conjecture, then neither nor can be a monomial.  "
},
{
  "id": "Smp",
  "level": "2",
  "url": "sec-1-7.html#Smp",
  "type": "Definition",
  "number": "1.7.2",
  "title": "",
  "body": "  Let be coprime with . A pair , of elements in , is called an -pair in  -pair in , if An -pair is called a standard -pair in  standard -pair in if .   "
},
{
  "id": "imposible_que_P_y_Q_esten_encima_de_la_diagonal",
  "level": "2",
  "url": "sec-1-7.html#imposible_que_P_y_Q_esten_encima_de_la_diagonal",
  "type": "Remark",
  "number": "1.7.3",
  "title": "",
  "body": " If is a Jacobian pair, then or . In fact, by , we have Assume by contradiction that and . Then and becomes an equality. Hence, on one hand, by , we have ; while, on the other hand, from , it follows that , for , which leads to the contradiction .  "
},
{
  "id": "ve_rho_sigma_es_mayor_que_el_de_F",
  "level": "2",
  "url": "sec-1-7.html#ve_rho_sigma_es_mayor_que_el_de_F",
  "type": "Remark",
  "number": "1.7.4",
  "title": "",
  "body": " Note that if , and with , then   "
},
{
  "id": "no_se_dividen",
  "level": "2",
  "url": "sec-1-7.html#no_se_dividen",
  "type": "Proposition",
  "number": "1.7.5",
  "title": "",
  "body": "  Assume the Jacobian conjecture is false and let be a counterexample to it. If or , then there is a counterexample with    "
},
{
  "id": "sec-1-7-9",
  "level": "2",
  "url": "sec-1-7.html#sec-1-7-9",
  "type": "Proof",
  "number": "1.7.1",
  "title": "",
  "body": " Assume for example that and write . By , we know that . Hence Then, by , we have . Since, moreover , by (2b), there exist and a -homogeneous polynomial , such that Hence and , for some . It follows that satisfies the inequality . Moreover, it is clear that and . Hence, by version 3 of the Jacobian conjecture, is also a counterexample. Now, we can construct successively , such that are counterexamples and , until does not divide . Then and so and satisfy the required conditions. When a similar argument gives the proof.  "
},
{
  "id": "counterexample_sin_divisibilidad",
  "level": "2",
  "url": "sec-1-7.html#counterexample_sin_divisibilidad",
  "type": "Definition",
  "number": "1.7.6",
  "title": "",
  "body": "  A counterexample , without divisibility relations of degrees or simply a counterexample , without divisibility  counterexample , without divisibility , is a counterexample to the Jacobian conjecture, such that and .   "
},
{
  "id": "lemma_PQ_similares_en_I",
  "level": "2",
  "url": "sec-1-7.html#lemma_PQ_similares_en_I",
  "type": "Lemma",
  "number": "1.7.7",
  "title": "",
  "body": "  Assume that the Jacobian conjecture is false, let be a counterexample to it and let . Assume that there exist coprime , such that Then   ,  ,  ,  if and only if ,  .    "
},
{
  "id": "sec-1-7-12",
  "level": "2",
  "url": "sec-1-7.html#sec-1-7-12",
  "type": "Proof",
  "number": "1.7.2",
  "title": "",
  "body": " To begin with note that is contained in a half circle, and so, by  and We next prove items 1--5 separately.   1. By equality , we have    2. Assume by contradiction that this is false. Then, by item 1, we have and . Hence, by , necessarily . Consequently , and so, by  which is impossible, since . This concludes the proof of item 2.   3. By , we must prove that We first assume that , and we consider the three cases:  a) ,  b) ,  c) .  In the case a), from we obtain directly as desired. In the case b), we note that, again by , we know that , and so there is a with . But then, since , we have and by the same argument . Hence, as desired. The case c) is similar (use that ).  Assume now that . We first note that there exists with . In fact, otherwise and , which is impossible by . If , then by , we have Combining this with item 2, we obtain that as desired. In the case , the same argument works.   4. and 5. By items 2 and 3, and by (2b), there exist coprime , and a -homogeneous polynomial , such that Clearly is a monomial if and only if is a monomial, and this happens if and only if is a monomial, which proves item 4. Now, by we have Consequently, , and so, and , by . Finally, the same remark yields which finishes the proof of item 5.  "
},
{
  "id": "star",
  "level": "2",
  "url": "sec-1-7.html#star",
  "type": "Proposition",
  "number": "1.7.8",
  "title": "",
  "body": "  If is a counterexample to the plane Jacobian conjecture, then there exist coprime such that, for all , we have   ,  and ,  ,   and ,   .    "
},
{
  "id": "sec-1-7-14",
  "level": "2",
  "url": "sec-1-7.html#sec-1-7-14",
  "type": "Proof",
  "number": "1.7.3",
  "title": "",
  "body": " Set and write We first consider the case . By , we have , which implies and . Hence, and so, by , we know that . Thus items 2 and 3 are satisfied, and so, by (2b), there exist coprime , and a -homogeneous polynomial such that Then, by , we have which yields . Similarly , which finishes the proof of item 4, for . Moreover, we also have which proves item 1 in this case. Assume inductively that and that items 1--4 hold for the direction . Then and yields items 1--4, for . Hence items 1--4 hold for all . Moreover, item 4 of guarantees that proving item 5. Finally take , and notice that for some , we have and, again by , we obtain items 1--4, for , concluding the proof.  "
},
{
  "id": "Ilustracion_de_star",
  "level": "2",
  "url": "sec-1-7.html#Ilustracion_de_star",
  "type": "Figure",
  "number": "1.7.9",
  "title": "",
  "body": " Illustration of   "
},
{
  "id": "direcciones_1k",
  "level": "2",
  "url": "sec-1-7.html#direcciones_1k",
  "type": "Proposition",
  "number": "1.7.10",
  "title": "",
  "body": "  Let be a Jacobian pair in , let and let be as in . Then the following cases arise:    If , then .    If , then for some , and .    If , then for some , and .    Moreover, if and if we write , where and , then has exactly one linear factor (which is different from , since , by ).   "
},
{
  "id": "sec-1-7-17",
  "level": "2",
  "url": "sec-1-7.html#sec-1-7-17",
  "type": "Proof",
  "number": "1.7.4",
  "title": "",
  "body": " Note that if and only if , and if and only if is not a monomial. By (3) the -homogeneous polynomial is not a monomial, and will find the line containing . Since , we know that is the straight line going through with slope (see ). If , then clearly proving item 1. If , then the slope is in and intersects in more than one point only if , for some . In this case and then has degree , and . Finally, if , then the slope is in and intersects in more than one point only if , for some . In this case and then has degree , and .  "
},
{
  "id": "posibles_L",
  "level": "2",
  "url": "sec-1-7.html#posibles_L",
  "type": "Figure",
  "number": "1.7.11",
  "title": "",
  "body": " Lines through that intersect in more than one point   "
},
{
  "id": "casos_soporte",
  "level": "2",
  "url": "sec-1-7.html#casos_soporte",
  "type": "Remark",
  "number": "1.7.12",
  "title": "",
  "body": " Assume that is a Jacobian pair and let be the -homogeneous polynomial given in . Write where and are polynomials such that and . By (1), , and so by , the polynomial has at most two distinct linear factors.    If has zero linear factors, i.e., if is a constant, then is a monomial with support equal to , and we have the following three possibilities, which are illustrated in :   a) and ,  b) and ,  c) and .     If is a power of a linear factor, then has at least one linear factor, and so or . Since, by , we know that if and if , we have three possibilities, which are illustrated in :   a) and ,  b) and ,  c) and .     If has two different linear factors, then has also two different linear factors, and hence . Again by , necessarily and . This is also illustrated in .    "
},
{
  "id": "p_constante",
  "level": "2",
  "url": "sec-1-7.html#p_constante",
  "type": "Figure",
  "number": "1.7.13",
  "title": "",
  "body": " Case 1   "
},
{
  "id": "p_de_con_un_factor",
  "level": "2",
  "url": "sec-1-7.html#p_de_con_un_factor",
  "type": "Figure",
  "number": "1.7.14",
  "title": "",
  "body": " Case 2 and Case 3   "
},
{
  "id": "reduccion_con_un_factor",
  "level": "2",
  "url": "sec-1-7.html#reduccion_con_un_factor",
  "type": "Proposition",
  "number": "1.7.15",
  "title": "",
  "body": "  Assume the Jacobian conjecture is false and let be a counterexample to it. Assume that and do not divide each other and that we are in one of the cases 1b), 1c) or 2a) of . Then there exists an automorphism of such that Consequently, .   "
},
{
  "id": "sec-1-7-23",
  "level": "2",
  "url": "sec-1-7.html#sec-1-7-23",
  "type": "Proof",
  "number": "1.7.5",
  "title": "",
  "body": " If we are in the case 2a), then and so, by or (1), we are in the case c) of and we can erase the edge . By this and , we arrive at case 1b) without changing nor . Now, if we are in the case 1b), then we can apply the automorphism which exchanges and , and we arrive at case 1c) without changing nor . Thus, we can assume that we are in the case 1c). Then, by , So, by (2), we have , for some . Moreover, by (2), we know that . Let be as in and write where and are polynomials such that and . Again by , we also know that , for some , and so, using , we obtain that , for some . Moreover, since and we are in the case 1c), we know that . Hence We define by setting and , and set and . By  Hence, for each we have which, combined with the fact that , gives Since , the equality is only possible if and . But it is impossible that . In fact, since , if , then , which is false because . Consequently, , which is the second condition in . The first condition follows from the series of equalities where the first and the third one are true by (1); and the second one, by .  "
},
{
  "id": "subrectangular",
  "level": "2",
  "url": "sec-1-7.html#subrectangular",
  "type": "Definition",
  "number": "1.7.16",
  "title": "",
  "body": "  We will say that is subrectangular  subrectangular polynomial if there exists such that In this case we also will say that is subrectangular  subrectangular support . Finally, we will say that a pair is subrectangular if and are. subrectangular pair of polynomials    "
},
{
  "id": "standard_counterexample",
  "level": "2",
  "url": "sec-1-7.html#standard_counterexample",
  "type": "Definition",
  "number": "1.7.17",
  "title": "",
  "body": "  A counterexample to the Jacobian conjecture is called a standard counterexample  standard counterexample if and there exists such that is a standard -pair.   "
},
{
  "id": "sec-1-7-27",
  "level": "2",
  "url": "sec-1-7.html#sec-1-7-27",
  "type": "Remark",
  "number": "1.7.18",
  "title": "",
  "body": " The pair in the previous definition is unique and coincides with the pair in .  "
},
{
  "id": "contraejemplo_da_standard_mn_par",
  "level": "2",
  "url": "sec-1-7.html#contraejemplo_da_standard_mn_par",
  "type": "Proposition",
  "number": "1.7.19",
  "title": "",
  "body": "  For each counterexample such that and do not divide each other, there exists an automorphism of such that is a subrectangular counterexample to the Jacobian Conjecture, which is a standard -pair, for some . Moreover    "
},
{
  "id": "sec-1-7-29",
  "level": "2",
  "url": "sec-1-7.html#sec-1-7-29",
  "type": "Proof",
  "number": "1.7.6",
  "title": "",
  "body": " By , applying an automorphism of if necessary, we can assume that we are not in any of the cases 1b), 1c) or 2a) of . Now, we will modify and without changing their degrees, either by using or by applying . Hence condition will be satisfied. If we are in case 3), then where for the last equality we have used (2). Applying the automorphism of , defined by and , we arrive at case 2c). If we are in case 2c), then we apply the automorphism which exchanges and , and we arrive at case 2b). In case 2b) we can erase the edge (see c)) and arrive at case 1a). Thus, we can and will assume that we are in case 1a), and so we have where we have used (5). If necessary, we apply to ensure that . Since (4) guarantees that , we conclude that . We claim that In fact, to justify the first inequality, suppose for contradiction that and let be as in . By (2) we know that with . Consequently and thus, by , we obtain This leads to a contradiction, and thus we conclude that , as claimed. Similarly one shows that . Consequently which implies that both and are subrectangular. Hence, where the last inequality follows from the fact that . Moreover, since and do not divide each other, it follows that , and therefore is an -pair. Let be as in corresponding to the direction . Since , we may write , where is a monic polynomial. Moreover, following , we write where are pairwise distinct, , and . If , then is a monomial. In this case we have , and therefore is a standard -pair. If and , then, as noted in (c), the edge can be erased. In this case, becomes a monomial, which implies that , and therefore becomes a standard -pair. Consequently, we can assume that , or and . We claim that where . By (2), to prove this bound it suffices to show that if , then . Assume for contradiction, that and . Then , and by , we would have which leads to a contradiction. Now observe that the bound in implies . Consequently, . Therefore, by , we have and thus . But then for some index we have ; otherwise, by we would derive the contradiction Let be the automorphism of defined by and . By , we have and therefore, by , it follows that . Now observe that is impossible; otherwise we would have , contradicting (4). Hence, which shows that is a standard -pair.  "
},
{
  "id": "factores_de_ell10",
  "level": "2",
  "url": "sec-1-7.html#factores_de_ell10",
  "type": "Figure",
  "number": "1.7.20",
  "title": "",
  "body": " Factors of   "
},
{
  "id": "subrectangular_contraejemplo",
  "level": "2",
  "url": "sec-1-7.html#subrectangular_contraejemplo",
  "type": "Proposition",
  "number": "1.7.21",
  "title": "",
  "body": "  For each counterexample such that and do not divide each other, there exists an automorphism of such that is a standard counterexample to the Jacobian Conjecture,    "
},
{
  "id": "sec-1-7-32",
  "level": "2",
  "url": "sec-1-7.html#sec-1-7-32",
  "type": "Proof",
  "number": "1.7.7",
  "title": "",
  "body": " By , applying an automorphism of if necessary, we can assume that is a subrectangular counterexample to the Jacobian Conjecture, which is a standard -pair, for some . Write . If , then there is nothing to prove. Suppose instead that . By (2), we know that . Let be the -homogeneous polynomial provided by . Since , it follows that . We assert that . Indeed, if , then by , it must be that , which leads to a contradiction, as and . Since , (3) ensures that is not a monomial. Hence, by , we obtain and with . Consequently, by (4), we conclude that According to , this implies that . On the other hand, applying once again, we deduce that , and therefore . Let be the automorphism of , defined by and . By  for each . From this it follows that , that is a standard -pair and that is satisfied.  "
},
{
  "id": "ejercicio_ultima_assertion",
  "level": "2",
  "url": "sec-1-7.html#ejercicio_ultima_assertion",
  "type": "Checkpoint",
  "number": "1.7.22",
  "title": "",
  "body": "  Prove the last assertion in .   "
},
{
  "id": "sec-1-8",
  "level": "1",
  "url": "sec-1-8.html",
  "type": "Section",
  "number": "1.8",
  "title": "The elements R and F",
  "body": " The elements R and F   Valuaciones para polinomios  ...    Valuaciones para polinomios  ...    Valuaciones para polinomios  ...    Valuaciones para polinomios  ...    Valuaciones para polinomios  ...   "
},
{
  "id": "defino1_1",
  "level": "2",
  "url": "sec-1-8.html#defino1_1",
  "type": "Definition",
  "number": "1.8.1",
  "title": "Valuaciones para polinomios.",
  "body": " Valuaciones para polinomios  ...  "
},
{
  "id": "defino1_2",
  "level": "2",
  "url": "sec-1-8.html#defino1_2",
  "type": "Definition",
  "number": "1.8.2",
  "title": "Valuaciones para polinomios.",
  "body": " Valuaciones para polinomios  ...  "
},
{
  "id": "defino1_3",
  "level": "2",
  "url": "sec-1-8.html#defino1_3",
  "type": "Definition",
  "number": "1.8.3",
  "title": "Valuaciones para polinomios.",
  "body": " Valuaciones para polinomios  ...  "
},
{
  "id": "defino1_4",
  "level": "2",
  "url": "sec-1-8.html#defino1_4",
  "type": "Definition",
  "number": "1.8.4",
  "title": "Valuaciones para polinomios.",
  "body": " Valuaciones para polinomios  ...  "
},
{
  "id": "defino1_5",
  "level": "2",
  "url": "sec-1-8.html#defino1_5",
  "type": "Definition",
  "number": "1.8.5",
  "title": "Valuaciones para polinomios.",
  "body": " Valuaciones para polinomios  ...  "
},
{
  "id": "sec-2-1",
  "level": "1",
  "url": "sec-2-1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Jacobian pairs in <span class=\"process-math\">\\(L(\\ell)\\)<\/span>",
  "body": " Jacobian pairs in  Polynomials in two variables over a field are expressions of the form   "
},
{
  "id": "sec-2-2",
  "level": "1",
  "url": "sec-2-2.html",
  "type": "Section",
  "number": "2.2",
  "title": "Directions, leading terms, starting points and end points in <span class=\"process-math\">\\(L(\\ell)\\)<\/span>",
  "body": " Directions, leading terms, starting points and end points in  Content...  "
},
{
  "id": "sec-2-3",
  "level": "1",
  "url": "sec-2-3.html",
  "type": "Section",
  "number": "2.3",
  "title": "The element F in <span class=\"process-math\">\\(L(\\ell)\\)<\/span>",
  "body": " The element F in  Content...  "
},
{
  "id": "sec-2-4",
  "level": "1",
  "url": "sec-2-4.html",
  "type": "Section",
  "number": "2.4",
  "title": "Order on directions and shaping the support in <span class=\"process-math\">\\(L(\\ell)\\)<\/span>",
  "body": " Order on directions and shaping the support in   Valuaciones para polinomios  ...    Valuaciones para polinomios  ...    Valuaciones para polinomios  ...    Valuaciones para polinomios  ...    Valuaciones para polinomios  ...   "
},
{
  "id": "defino2-1",
  "level": "2",
  "url": "sec-2-4.html#defino2-1",
  "type": "Definition",
  "number": "2.4.1",
  "title": "Valuaciones para polinomios.",
  "body": " Valuaciones para polinomios  ...  "
},
{
  "id": "defino2-2",
  "level": "2",
  "url": "sec-2-4.html#defino2-2",
  "type": "Definition",
  "number": "2.4.2",
  "title": "Valuaciones para polinomios.",
  "body": " Valuaciones para polinomios  ...  "
},
{
  "id": "defino2-3",
  "level": "2",
  "url": "sec-2-4.html#defino2-3",
  "type": "Definition",
  "number": "2.4.3",
  "title": "Valuaciones para polinomios.",
  "body": " Valuaciones para polinomios  ...  "
},
{
  "id": "defino2-4",
  "level": "2",
  "url": "sec-2-4.html#defino2-4",
  "type": "Definition",
  "number": "2.4.4",
  "title": "Valuaciones para polinomios.",
  "body": " Valuaciones para polinomios  ...  "
},
{
  "id": "defino2-5",
  "level": "2",
  "url": "sec-2-4.html#defino2-5",
  "type": "Definition",
  "number": "2.4.5",
  "title": "Valuaciones para polinomios.",
  "body": " Valuaciones para polinomios  ...  "
},
{
  "id": "sec-2-5",
  "level": "1",
  "url": "sec-2-5.html",
  "type": "Section",
  "number": "2.5",
  "title": "Regular corners of (m,n)-pairs in <span class=\"process-math\">\\(L(\\ell)\\)<\/span>",
  "body": " Regular corners of (m,n)-pairs in  Content...  "
},
{
  "id": "sec-2-6",
  "level": "1",
  "url": "sec-2-6.html",
  "type": "Section",
  "number": "2.6",
  "title": "Complete chains of regular corners",
  "body": " Complete chains of regular corners  Content...  "
},
{
  "id": "sec-2-7",
  "level": "1",
  "url": "sec-2-7.html",
  "type": "Section",
  "number": "2.7",
  "title": "Lower bounds for <span class=\"process-math\">\\(\\gcd(\\deg(P),\\deg(Q))\\)<\/span>",
  "body": " Lower bounds for  Content...  "
},
{
  "id": "chapter-3",
  "level": "1",
  "url": "chapter-3.html",
  "type": "Chapter",
  "number": "3",
  "title": "Additional conditions for the shape",
  "body": " Additional conditions for the shape  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
