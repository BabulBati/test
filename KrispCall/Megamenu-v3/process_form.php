<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $api_key = '1rDI-TcVFRSypDQ6r_ejrg';
    $form_id = '6918909';

    $first_name = $_POST['sp_first_name'];
    $last_name = $_POST['sp_last_name'];
    $email = $_POST['sp_email'];
    $business_name = $_POST['sp_business_name'];
    $phone = $_POST['sp_phone'];

    // Prepare data to send to ConvertKit
    $data = [
        'api_key' => $api_key,
        'email' => $email,
        'first_name' => $first_name,
        'fields' => [
            'last_name' => $last_name,
            'business_name' => $business_name,
            'phone' => $phone
        ]
    ];

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, "https://api.convertkit.com/v3/forms/$form_id/subscribe");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch); 

    if (curl_errno($ch)) {
        $response_data = [
            'status' => 'error',
            'message' => 'An error occurred. Please try again.'
        ];
    } else {
        $response_data = json_decode($response, true);

        if (isset($response_data['subscription'])) {
            $response_data = [
                'status' => 'success',
                'message' => 'Thank you for becoming a partner!'
            ];
        } else {
            $response_data = [
                'status' => 'error',
                'message' => 'Failed to subscribe. Please try again.'
            ];
        }
    }

    curl_close($ch);

    echo json_encode($response_data);
    exit;
} else {
    $response_data = [
        'status' => 'error',
        'message' => 'Invalid request method.'
    ];

    echo json_encode($response_data);
    exit;
}
?>
