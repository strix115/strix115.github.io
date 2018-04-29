    function validateForm() {
        var form = document.forms["kontakt-form"];
        //form elemet
        var valid = true;
        //boolean zda je formuláø validní
        var element = "jmeno";
        var data = '';
        //prvek který zrovna kontrolujeme
        if (form[element].value == "") {
            //prvek je prázdný
            document.getElementById(element + '-error').style.display = 'block';
            //zobrazím span s error hláškou
            form[element].classList.add('error');
            //pøidám error style prvku, který není validní
            valid = false;
            //formuláø se neodešle -> není validní
        } else {
            //prvek prošel validací
            //sktryji/odstraním prvky pro zobrazení erroru uživately
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
            document.getElementById(element + '-error').innerHTML = "Email není ve správném formátu";
            //pøidám custom hlášku do error spanu
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
            //formuláø je validní odesílám ho
            alert("OK");
            form.reset();
           
        }
        return false;
    }

    /**
     Funkce na validaci emailu pomocí regexu
     */
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


    