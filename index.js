window.addEventListener('load', function() {
   // Validationルール
   rules: {
    company_name: {
      required: true
    }
    mail_address: {
      required: true
    }
    phone_number: {
      required: true
    }
    password: {
      required: true
    }
    password2: {
      required: true
    }
  }

// 事業所名バリデーション
// タグの指定
const company_name = $('#company_display_name');
//テキストboxからカーソルが外れたら処理を動くようにしたい
company_name.blur(function() {
    // jQueryオブジェクトからテキストboxのvalueを取得する
  const inputname = company_name.val()
  // 文字が入力されているかされていないかの確認
  if (inputname !== '') {
    console.log('文字が入力されています');
  } else {
    console.log('文字が入力されていません');
  }
});

// // メールアドレスバリデーション
// // タグの指定
const emailInput = document.getElementById('user_email');

emailInput.addEventListener('input', function() {
  const email = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailPattern.test(email)) {
    // バリデーションを通過した場合の処理
console.log('メールアドレスは正しいです');
  } else {
    // バリデーションに失敗した場合の処理
console.log('メールアドレスが正しくありません');
  }
});

$(function() {
// 電話番号バリデーション
// タグの指定
const phone_number1 = $('.phone_number1');
//テキストboxからカーソルが外れたら処理を動くようにしたい
phone_number1.blur(function() {
    // jQueryオブジェクトからテキストboxのvalueを取得する
  const input_value1 = phone_number1.val();
  // 文字列（value)から数字以外の値を何もない状態に置換する。
  const numeric_value1 = input_value1.replace(/[^0-9]/g, '');

  if (numeric_value1.length === 0) {
    $('#company_phonel_attributes_a').val('');
    console.log("数値を入力してください。");
  }

  phone_number1.val(numeric_value1);
});

const phone_number2 = $('.phone_number2');
phone_number2.blur(function() {
  const input_value2 = phone_number2.val();
  const numeric_value2 = input_value2.replace(/[^0-9]/g, '');

  if (numeric_value2.length === 0) {
    $('#company_phonel_attributes_b').val('');
    console.log("数値を入力してください。");
  }

  phone_number2.val(numeric_value2);
});

const phone_number3 = $('.phone_number3');
phone_number3.blur(function() {
  const input_value3 = phone_number3.val();
  const numeric_value3 = input_value3.replace(/[^0-9]/g, '');

  if (numeric_value3.length === 0) {
    $('#company_phonel_attributes_c').val('');
    console.log("数値を入力してください。");
  }

  phone_number3.val(numeric_value3);
});
})
// 入力数を11文字までにする
const phone_number1 = $('.phone_number1');
const phone_number2 = $('.phone_number2');
const phone_number3 = $('.phone_number3');

phone_number1.on('input', function() {
  validatePhoneNumbers();
});

phone_number2.on('input', function() {
  validatePhoneNumbers();
});

phone_number3.on('input', function() {
  validatePhoneNumbers();
});

function validatePhoneNumbers() {
  const input_value1 = phone_number1.val();
  const input_value2 = phone_number2.val();
  const input_value3 = phone_number3.val();
    // 入力文字数が11文字を超える場合、入力を制限する
  const total_length = input_value1.length + input_value2.length + input_value3.length;
  if (total_length > 11) {
    phone_number1.val(input_value1.slice(0, 11 - input_value2.length - input_value3.length));
  }
}

// パスワードバリデーション
// タグの指定
const password = $('#user_password');
//テキストboxからカーソルが外れたら処理を動くようにしたい
password.blur(function() {
// jQueryオブジェクトからテキストboxのvalueを取得する
const input_value2 = password.val();
// 文字列（value)が8文字以上であるか確認する
if (input_value2.length >= 8) {
  console.log('文字列は8文字以上です')
} else {
  console.log('文字列は8文字未満です')
}

//パスワード 確認バリデーション
// タグの指定
const confirmPassword = $('#user_password_confirmation');
//テキストboxからカーソルが外れたら処理を動くようにしたい
confirmPassword.blur(function() {
  // jQueryオブジェクトからテキストboxのvalueを取得する
  const confirmPasswordValue = confirmPassword.val();
  const passwordValue = password.val();
 // 文字列（value)がpasswordと同じか確認する
if (passwordValue === confirmPasswordValue) {
  console.log('パスワードが一致しています');
} else {
  console.log('パスワードが一致しません');
}
});
});

// freeeを始めるのdisabledを解除する
// タグの指定
const select1 = $('#company_head_count');
const select2 = $('#sales_information_foundation_year_code');
const input1 = $('#user_email');
const input2 = $('#company_phonel_attributes_a');
const input3 = $('#company_phonel_attributes_b');
const input4 = $('#company_phonel_attributes_c');
const input5 = $('#user_password');
const input6 = $('#user_password_confirmation');
const input7 = $('#company_display_name');
const ablevalue = $('#submit-btn');
// 入力と選択された時に起動
select1.on('change', checkFields);
select2.on('change', checkFields);
input1.on('input', checkFields);
input2.on('input', checkFields);
input3.on('input', checkFields);
input4.on('input', checkFields);
input5.on('input', checkFields);
input6.on('input', checkFields);
input7.on('input', checkFields);
  // jQueryオブジェクトからテキストboxのvalueを取得する
function checkFields() {
  const selected1 = select1.val();
  const selected2 = select2.val();
  const value1 = input1.val();
  const value2 = input2.val();
  const value3 = input3.val();
  const value4 = input4.val();
  const value5 = input5.val();
  const value6 = input6.val();
  const value7 = input7.val();
// これら全てが条件を満たしているとき
    if (selected1 && selected2 && value1 && value2 && value3 && value4 && value5 && value6 && value7) {
      // 2つのセレクト要素が選択され、7つの入力フィールドが入力されている場合は無効化を解除する
      ablevalue.removeAttr('disabled');
    }
  }
})