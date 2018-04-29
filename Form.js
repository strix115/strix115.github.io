    function validateForm() {
        var form = document.forms["kontakt-form"];
        //form elemet
        var valid = true;
        //boolean zda je formul�� validn�
        var element = "jmeno";
        var data = '';
        //prvek kter� zrovna kontrolujeme
        if (form[element].value == "") {
            //prvek je pr�zdn�
            document.getElementById(element + '-error').style.display = 'block';
            //zobraz�m span s error hl�kou
            form[element].classList.add('error');
            //p�id�m error style prvku, kter� nen� validn�
            valid = false;
            //formul�� se neode�le -> nen� validn�
        } else {
            //prvek pro�el validac�
            //sktryji/odstran�m prvky pro zobrazen� erroru u�ivately
            document.getElementById(element + '-error').style.display = 'none';
            form[element].classList.remove('error');
            data += 'jmeno:' + form[element].value + '</br>';
        }
        element = 'e-mail';
        if (form["e-mail"].value == "") {
            document.getElementById(element + '-error').style.display = 'block';
            form[element].classList.add('error');
            valid = false;
        } else if (!validateEmail(form["e-mail"].value)) {
            //validace emailu
            document.getElementById(element + '-error').style.display = 'block';
            form[element].classList.add('error');
            document.getElementById(element + '-error').innerHTML = "Email nen� ve spr�vn�m form�tu";
            //p�id�m custom hl�ku do error spanu
            valid = false;
        } else {
            document.getElementById(element + '-error').style.display = 'none';
            form[element].classList.remove('error');
            data += 'email:' + form[element].value + '</br>'
        }
        element = 'zprava';
        if (form[element].value == "") {
            document.getElementById(element + '-error').style.display = 'block';
            form[element].classList.add('error');
            valid = false;
        } else {
            document.getElementById(element + '-error').style.display = 'none';
            form[element].classList.remove('error');
            data += 'zprava:' + form[element].value + '</br>'
        }
        if (valid) {
            //formul�� je validn� odes�l�m ho
            alert("OK");
            form.reset();
           
        }
        return false;
    }

    /**
     Funkce na validaci emailu pomoc� regexu
     */
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


    